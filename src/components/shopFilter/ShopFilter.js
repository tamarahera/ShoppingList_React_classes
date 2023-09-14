import './shopFilter.scss';
import '../../style/button.scss';

const ShopFilter = () => {
    return (
        <div className='search__filter'>
                <button type="button" className='button button__filter button__filter_active'>
               </button>
               <button type="button" className='button button__filter'>
               </button>
               <button type="button" className='button button__filter'>
               </button>
        </div>
    )
}

export default ShopFilter;