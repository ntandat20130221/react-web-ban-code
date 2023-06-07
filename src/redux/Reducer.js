import {combineReducers} from "redux";
import {products} from "../data/Products";

const initState = {
    /* đây là trạng thái ban đầu của ứng dụng */
    cart: []
}

const cartReducer = (state = initState, action) => {

    /* Đây là Reducer, một hàm xử lý các hành động (actions) để cập nhật trạng thái của ứng dụng */
    switch (action.type) {

        case 'cart/add-item': {
            return {
                ...state, // sao chép trạng thái hiện tại
                cart: [
                    ...state.cart,
                    action.payload
                ]
                /*
                  Cập nhật thuộc tính cart với một mảng mới.
                  Mảng mới này bao gồm toàn bộ phần tử từ state.cart và phần tử mới được thêm vào từ action.payload
                 */
            }

            /**
             Đây là một trường hợp xử lý cho hành động có loại là 'cart/add-item'.
             Khi nhận được hành động này, reducer sẽ tạo ra một đối tượng mới bằng cách sao chép trạng thái hiện tại (...state)
             và cập nhật thuộc tính cart với một mảng mới gồm toàn bộ phần tử từ state.cart và phần tử mới được thêm vào từ action.payload.
             action.payload chứa dữ liệu mới cần thêm vào giỏ hàng
             */
        }

        case 'cart/remove-item': {

            console.log("Day la Action cart/remove-item");

            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);

            console.log("Object cart", updatedCart);

            return {
                ...state,
                cart: updatedCart
            }
        }

        default :
            return state;

        /**
         Đây là trường hợp mặc định của switch case.
         Nếu hành động không khớp với bất kỳ trường hợp nào đã được xác định,
         reducer sẽ trả về trạng thái hiện tại mà không có sự thay đổi.
         */

    }

}

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