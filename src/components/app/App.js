import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import { ShopList, InitTitle, NoMatchTitle } from '../shopList/ShopList';
import ShopTotal from '../shopTotal/ShopTotal';
import Footer from '../footer/Footer';

import './app.scss';

const dataItems = [
  {
    name: 'Bananas',
    amount: 2,
    price: 3,
    checked: false,
    important: false,
    id: uuidv4()
  },
  {
    name: 'Cat`s food',
    amount: 5,
    price: 10,
    checked: false,
    important: true,
    id: uuidv4()
  },
  {
    name: 'Bread',
    amount: 4,
    price: 8,
    checked: false,
    important: false,
    id: uuidv4()
  },
  {
    name: 'Milk',
    amount: 3,
    price: 6,
    checked: true,
    important: false,
    id: uuidv4()
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Bananas',
          amount: 2,
          price: 3,
          checked: false,
          important: false,
          id: uuidv4()
        },
        {
          name: 'Cat`s food',
          amount: 5,
          price: 10,
          checked: false,
          important: true,
          id: uuidv4()
        },
        {
          name: 'Bread',
          amount: 4,
          price: 8,
          checked: false,
          important: false,
          id: uuidv4()
        },
        {
          name: 'Milk',
          amount: 3,
          price: 6,
          checked: true,
          important: false,
          id: uuidv4()
        }
      ],
      filterValue: 'all',
      searchValue: ''
    }
  }

  componentDidUpdate() {
    console.log('update')
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

  render() {
    const { data, filterValue, searchValue } = this.state;

    const filterData = this.onFilterData(data, filterValue);
    const visibleData = this.onSearchData(filterData, searchValue);

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
            <ShopList
              allData={visibleData}
              onChecked={this.onChecked}
              onImportant={this.onImportant}
              onDeleteItems={this.onDeleteItems}
              onDeleteCheckedItems={this.onDeleteCheckedItems}
            />
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