import { useState } from 'react';
import './shopAdd.scss';
import '../../style/input.scss';
import '../../style/button.scss';

const ShopAdd = () => {
    return (
        <section className='add'>
            <h2 className='add__title'>Add a new item:</h2>
            <form className='add__form' action="">
                <label className='label-hidden' htmlFor="addNameInput">Add name</label>
                <input type="text"
                    name="item"
                    className="input input__main"
                    placeholder='Item...'
                    id='addNameInput'
                    required />
                <label className='label-hidden' htmlFor="addAmountInput">Add amount</label>
                <input type="text"
                    name="amount"
                    className="input input__add"
                    placeholder='Amount...'
                    id='addAmountInput'
                    required />
                <label className='label-hidden' htmlFor="addPriceInput">Add price</label>
                <input type="text"
                    name="price"
                    className="input input__add"
                    placeholder='Price...'
                    id='addPriceInput'
                    required />

                <div className='add__buttons'>
                    <button type="submit" className="button button__add">
                        Add
                    </button>
                    <button type="reset" className="button button__reset">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ShopAdd;