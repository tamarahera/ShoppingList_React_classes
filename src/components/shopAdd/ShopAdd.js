import { Component } from 'react';
import './shopAdd.scss';
import '../../style/input.scss';
import '../../style/button.scss';

class ShopAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            amount: '',
            price: ''
        }
    }

    onSetValue = (e) => {
        const filterValue = e.target.value.replace(/[ \W]/g, '');
        this.setState({
            [e.target.name]: filterValue
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onCreateItem(this.state.item, this.state.amount, this.state.price);

        this.onReset();
    }

    onReset = () => {
        this.setState ({
            item: '',
            amount: '',
            price: ''
        })
    }
    
    render() {
        return (
            <section className='add'>
                <h2 className='add__title'>Add a new item:</h2>
                <form className='add__form' onSubmit={this.onSubmit}>
                    <label className='label-hidden' htmlFor="addNameInput">Add name</label>
                    <input type="text"
                        name="item"
                        className="input input__main"
                        placeholder='Item...'
                        id='addNameInput'
                        required
                        onChange={this.onSetValue}
                        value={this.state.item} />
                    <label className='label-hidden' htmlFor="addAmountInput">Add amount</label>
                    <input type="text"
                        name="amount"
                        className="input input__add"
                        placeholder='Amount...'
                        id='addAmountInput'
                        required
                        onChange={this.onSetValue}
                        value={this.state.amount} />
                    <label className='label-hidden' htmlFor="addPriceInput">Add price</label>
                    <input type="text"
                        name="price"
                        className="input input__add"
                        placeholder='Price...'
                        id='addPriceInput'
                        required
                        onChange={this.onSetValue}
                        value={this.state.price} />
    
                    <div className='add__buttons'>
                        <button type="submit" className="button button__add">
                            Add
                        </button>
                        <button type="reset" className="button button__reset" onClick={this.onReset}>
                            Reset
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default ShopAdd;