import './shopFilter.scss';
import '../../style/button.scss';

const ShopFilter = () => {
    return (
        <div className='search__filter'>
            <button type="button" className='button button__filter button__filter_active'>All items
            </button>
            <button type="button" className='button button__filter'>Important
            </button>
            <button type="button" className='button button__filter'>Price over 5$
            </button>
        </div>
    )
}

export default ShopFilter;