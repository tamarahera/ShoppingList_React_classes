import { Component } from 'react';

import '../../style/input.scss';

class ShopFind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            localValueSearch: ''
        }
    }

    onUpdateLocalSearch = (e) => {
        const value = e.target.value;
        this.setState({localValueSearch: value})

        this.props.onUpdateSearch(value);
    }

    render() {
        return (
            <>
                <label className='label-hidden' htmlFor="find">Find an item...</label>
                <input className='input input__find'
                    type="text"
                    name="find"
                    id="find"
                    placeholder="Find an item..." 
                    onChange={this.onUpdateLocalSearch}
                    value={this.state.localValueSearch}/>
            </>
        )
    }
}

export default ShopFind;