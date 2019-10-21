// Todos reduces leem todas as action, por isso usamos o switch para ouvirmos só action que desejamos
export default function cart(state = [], action) {    
    switch (action.type) {
        case 'ADD_TO_CART': 
            return [...state, action.product];
        default:
            return state;
    }
}

// return [...state, action.product]; -> retorna os dados do carrinho para o state