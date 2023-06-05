import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import ListProducts from "./components/TopCodePage/ListProducts";
import ProductDetails from "./components/ProductDetailPage/ProductDetails";

const listProducts = [
    {
        path: '/top-codes',
        element: <ListProducts/>
    },
    {
        path: '/top-codes/product/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/quality-codes',
        element: <ListProducts/>
    },
    {
        path: '/quality-codes/product/:productId',
        element: <ProductDetails/>
    },
    {
        path: '/free-codes',
        element: <ListProducts/>
    },
    {
        path: '/free-codes/product/:productId',
        element: <ProductDetails/>
    }
]

const cart = [{
    path: '/cart-details',
    element: <CartDetailPage/>
}]
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    ...listProducts,
    ...cart
])