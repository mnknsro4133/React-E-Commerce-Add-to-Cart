import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {

    static propTypes = {
        basket: PropTypes.number
    }

    render() {
        return (
            <div className="basket-container">
                <div className="basket-icon-container">
                    <img src="https://simpleicon.com/wp-content/uploads/basket.png" />
                    <div>{this.props.basket}</div>
                </div>
            </div>
        );
    }
}

export default Header;