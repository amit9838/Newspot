import React, { Component } from 'react';
import loading from './loader.gif'

class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-3'>
                <img src={loading} alt="loading" width="40px" height="40px"/>
                <h6>
                
                </h6>
            </div>
        );
    }
}

export default Spinner;