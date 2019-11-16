// * é quase um async
import { call, select, put, all, takeLatest } from "redux-saga/effects";
import {toast} from 'react-toastify';
import api from "../../../services/api";
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';


// Essa function tem a responsabilidade de buscar os detalhes do produto e cadastrar no carrinho 
function* addToCart({ id }) {

    const productExists = yield select(
        state => state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if(amount > stockAmount) {
        toast.error('Quantidade solicitada fora do stock')
        return
    }

    if(productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price)
        }
    
        yield put(addToCartSuccess(data)); 
    }

}

// erro ao adicionar pelo carrinho
function* updateAmount({id, amount}) {
    if(amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do stock')
        return
    }
    yield put(updateAmountSuccess(id, amount));

}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),

])

// yield é tipo um await

// Fazer todo processo de exibirt quantidade pelo saga, deixa o reduce mais limpo