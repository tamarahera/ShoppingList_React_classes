import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import { ShopList, InitTitle, NoMatchTitle } from '../shopList/ShopList';
import ShopTotal from '../shopTotal/ShopTotal';
import Footer from '../footer/Footer';

import './app.scss';

const LOCAL_STORAGE_KEY = 'shopList.data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterValue: 'all',
      searchValue: ''
    }
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    this.setState({
      data: localData.data,
      filterValue: localData.filterValue,
      searchValue: ''
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      const jsonObj = JSON.stringify(this.state);
      
      localStorage.setItem(LOCAL_STORAGE_KEY, jsonObj); // set localStorage
    }
  }

  onChecked = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item;
      })
    }))
  }

  onImportant = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, important: !item.important }
        }
        return item;
      })
    }))
  }

  onDeleteItems = (id) => {
    console.log(id)
    this.setState(({ data }) => ({
      data: data.filter(item => {
        return item.id !== id;
      })
    }))
  }

  onDeleteCheckedItems = () => {
    this.setState(({ data }) => ({
      data: data.filter(item => {
        return !item.checked;
      })
    }))
  }

  onCreateItem = (item, amount, price) => {
    const newItem = {
      name: item,
      amount: +amount,
      price: +price,
      checked: false,
      important: false,
      id: uuidv4()
    }
    this.setState(({ data }) => ({
      data: [...data, newItem]
    }))
  }

  onUpdateFilter = (name) => {
    this.setState({
      filterValue: name
    })
  }

  onFilterData = (arr, filterValue) => {
    switch (filterValue) {
      case 'important':
        return arr.filter(item => item.important);
      case 'over5':
        return arr.filter(item => item.price >= 5)
      default:
        return arr;
    }
  }

  onSearchData = (arr, value) => {
    if (value.length === 0) {
      return arr;
    }

    const searchedData = arr.filter(item => {
      return item.name.toLowerCase().startsWith(value.toLowerCase())
    });
    return searchedData;
  }

  onUpdateSearch = (value) => {
    this.setState({ searchValue: value });
  }

  setContent = (visibleData) => {
    if (this.state.data.length < 1 || !this.state.data) {
      return <InitTitle />
    } else if (visibleData.length < 1) {
      return <NoMatchTitle />
    } else {
      return <ShopList
                allData={visibleData}
                onChecked={this.onChecked}
                onImportant={this.onImportant}
                onDeleteItems={this.onDeleteItems}
                onDeleteCheckedItems={this.onDeleteCheckedItems}
              />
    }
  }

  render() {
    const { data, filterValue, searchValue} = this.state;

    const filterData = this.onFilterData(data, filterValue);
    const visibleData = this.onSearchData(filterData, searchValue);
    const content = this.setContent(visibleData)

    const itemsTotal = data.length;
    const amountTotal = data.reduce((sum, item) => {
      return sum += item.amount;
    }, 0);
    const priceTotal = data.reduce((sum, item) => {
      return sum += item.price;
    }, 0);

    return (
      <div className='app'>
        <header>
          <h1 className='app__header'>Shopping list</h1>
        </header>
        <main className='container'>
          <section className='search'>
            <ShopFind onUpdateSearch={this.onUpdateSearch} />
            <ShopFilter filterValue={this.state.filterValue}
              onUpdateFilter={this.onUpdateFilter} />
          </section>
          <section className='list'>
            {content}
          </section>
          <ShopAdd onCreateItem={this.onCreateItem} />
          <ShopTotal
            itemsTotal={itemsTotal}
            amountTotal={amountTotal}
            priceTotal={priceTotal} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;