import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from './styles';
import logo from "../../assets/images/logo.svg"

function Header({cartSize}) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes"></img>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={38} color="#fff"/>
            </Cart>

        </Container>
    )
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);