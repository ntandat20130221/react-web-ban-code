import {createBrowserRouter} from "react-router-dom";
import ListProducts from "./components/TopCodePage/ListProducts";
import ProductDetails from "./components/ProductDetailPage/ProductDetails";
import App from "./App";

const listProducts = [
    {
        path: 'top-codes',
        element: <ListProducts/>
    },
    {
        path: 'top-codes/product/:productId',
        element: <ProductDetails/>
    }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    ...listProducts
])