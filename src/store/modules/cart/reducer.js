// Todos reduces leem todas as action, por isso usamos o switch para ouvirmos só action que desejamos
// Immer permite manipularmos o nosso array como se ele fosse mutavel

import produce from "immer";

export default function cart(state = [], action) {    
    switch (action.type) {
        case '@cart/ADD_SUCCESS': 
            return produce(state, draft => {
                const { product } = action;

                draft.push(product)
            });
        case '@cart/REMOVE':
            return produce(state, draft => {
                // verifica se j[a consta o produto]
                const productIndex = draft.findIndex(p => p.id === action.id)

                if(productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@cart/UPDATE_AMOUNT_SUCCESS': {

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id)
                
                if(productIndex >= 0 ) {
                    draft[productIndex].amount = Number(action.amount)
                }
            })
        }
        default:
            return state;
    }
}

// return [...state, action.product]; -> retorna os dados do carrinho para o state