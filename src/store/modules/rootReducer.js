// Combina todos os reduces em apenas um único
import { combineReducers } from "redux";

import cart from "./cart/reducer";

export default combineReducers ({
    cart,
})