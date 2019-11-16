import React, { Component } from "react";
import { connect } from "react-redux"; //Conect o component com o estado do redux
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import  * as CartActions from "../../store/modules/cart/actions";

import { ProductList } from "./styles";

class Home extends Component {

    state = { 
        products: [],
    }

    async componentDidMount() {
        const response = await api.get('products');

        // Melhor forma para usar uma função de alteração de uma várial da api, sem ter que fazer a formatação toda hora (tomar cuidado ao usar funções dentro do render)
        const data = response.data.map(product => ({
            ...product, 
            priceFomatted: formatPrice(product.price),
        }))

        this.setState({ products: data })
    }

    handleAddProduct = id => {
        const { dispatch } = this.props

        // Dispara as actions do redux e informa exatamente a action que deve ser disparada
        dispatch(CartActions.addToCartRequest(id))
    }

    render () {

        const { products } = this.state
        const { amount } = this.props

        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                    <img src={product.image} alt={product.title} ></img>
    
                    <strong>{product.title}</strong>
                    {/* Modo burro de formatar o preço */}
                    {/* <span> {formatPrice(product.price)} </span> */}
                    <span> {product.priceFomatted} </span>
                    <button type="button" onClick={ () => this.handleAddProduct(product.id) }>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff"/> {amount[product.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                ))}
    
            </ProductList>
        )
    }
}

// Cria uma forma facil de acessar a infromação de quantas unidades já estão no carrinho
const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount

        return amount
    }, {}) // {} serve para o amount já iniciar com um objeto vazio (reduce)
})

export default connect(mapStateToProps)(Home);
//connect retorna outra função