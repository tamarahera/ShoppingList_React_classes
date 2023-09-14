import { useState } from 'react';

import '../../style/input.scss';

const ShopFind = () => {

    return (
        <>
            <label className='label-hidden' htmlFor="find">Find an item...</label>
            <input className='input input__find'
                type="text"
                name="find"
                id="find"
                placeholder="Find an item..."/>
        </>
    )
}

export default ShopFind;