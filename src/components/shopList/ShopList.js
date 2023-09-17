import ShopListItem from '../shopListItem/ShopListItem';
import { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './shopList.scss';
import '../../style/button.scss';

class ShopList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const listItems = this.props.allData.map(item => {
            const {id, ...restData} = item;
            return (
                <ShopListItem key={id} data={restData}/>
            )
        });

        return (
            <>
                <div className="list__title">
                    <p>Item</p>
                    <p>Amount</p>
                    <p>Price</p>
                    <p></p>
                </div>
                <ul className="list__wrapper">
                    {listItems}
                </ul>
                <div className="list__reset">
                    <button type="reset" className='button button__reset'>Delete checked</button>
                </div>
            </>
        )
    }
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