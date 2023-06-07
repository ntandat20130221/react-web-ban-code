import {combineReducers} from "redux";
import {cartReducer} from "./redux_tuyen/Reducer_Tuyen";
import {products} from "../data/Products";

const listProductsReducer = (state = {data: products, page: 1, sort: null, layout: 'grid', type: null}, action) => {
    switch (action.type) {
        case 'listProducts/page': {
            return {
                ...state,
                page: action.payload
            }
        }
        case 'listProducts/sort': {
            return {
                ...state,
                sort: action.payload
            }
        }
        case 'listProducts/type': {
            return {
                ...state,
                type: action.payload
            }
        }
        case 'listProducts/layout': {
            return {
                ...state,
                layout: action.payload
            }
        }
        default:
            return state
    }
}

export const reducers = combineReducers({
    cartReducer: cartReducer,
    listProductsReducer: listProductsReducer,
})