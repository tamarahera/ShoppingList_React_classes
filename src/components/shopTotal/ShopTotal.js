import { Component } from 'react';
import './shopTotal.scss';

class ShopTotal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {itemsTotal, amountTotal, priceTotal} = this.props;

        return (
            <section className='total'>
                <h2 className="title-hidden">Calculate total values</h2>
                <p>Total items: <span>{itemsTotal}</span></p>
                <p>Total amount: <span>{amountTotal}</span></p>
                <p>Total price: <span>{priceTotal}$</span></p>
            </section>
        )
    }
}

export default ShopTotal;