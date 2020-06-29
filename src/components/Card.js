import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export class Card extends Component {

    state = {
        basket: 0
    }

    ekle = () => {
        this.setState({
            basket: ++this.state.basket
        });

    };

    render() {
        return (
            <div>
                <Header 
                basket = {this.state.basket}
                />

                <div className="card-container">
                    <div className="product-image"><img src="https://productimages.hepsiburada.net/s/22/550/9957338677298.jpg" width="100%" /></div>
                    <div className="product-info">
                        <h3>Lenovo IdeaPad L340-17IRH Intel Core i7 9750H 16GB 1TB+256GB<br /> Lenovo</h3>
                        <h2>8.599,00 TL</h2>
                        <input type="submit" className="addToCard" onClick={this.ekle.bind(this)} />

                    </div>
                </div>
            </div>
        );
    }
}

export default Card;