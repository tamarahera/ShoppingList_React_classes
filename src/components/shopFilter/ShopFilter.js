import './shopFilter.scss';
import '../../style/button.scss';
import { Component } from 'react';

class ShopFilter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttonsData = [
            { name: 'all', label: 'All items' },
            { name: 'important', label: 'Important' },
            { name: 'over5', label: 'Price over 5$' }
        ];

        const buttons = buttonsData.map(item => {
            const active = this.props.filterValue === item.name;
            const classes = active ? ' button__filter_active' : '';

            return (
                <button type="button"
                    key={item.name}
                    className={'button button__filter' + classes}
                    onClick={() => this.props.onUpdateFilter(item.name)}>
                    {item.label}
                </button>
            )
        });
        return (
            <div className='search__filter'>
                {buttons}
            </div>
        )
    }
}

export default ShopFilter;