import React, { Component } from 'react';
import loading from './loading.gif'

class Spinner extends Component {
    render() {
        return (
            <div className='text-center mt-3'>
                <img src={loading} alt="loading" width="100px" height="120px"/>
                <h6>
                    Hold on...
                </h6>
            </div>
        );
    }
}

export default Spinner;