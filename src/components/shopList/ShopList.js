import ShopListItem from '../shopListItem/ShopListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './shopList.scss';
import '../../style/button.scss';

const ShopList = () => {

    return (
        <>
            <div className="list__title">
                <p>Item</p>
                <p>Amount</p>
                <p>Price</p>
                <p></p>
            </div>
            <ul className="list__wrapper">
                <ShopListItem/>
            </ul>
            <div className="list__reset">
                <button type="reset" className='button button__reset'>Delete checked</button>
            </div>
        </>
    )
}

const InitTitle = () => {
    return (
        <h2 className="list__init">Add some item to buy...</h2>
    )
}

const NoMatchTitle = () => {
    return (
        <h2 className="list__init">There are no matches...</h2>
    )
}

export { ShopList };
export { InitTitle };
export { NoMatchTitle };