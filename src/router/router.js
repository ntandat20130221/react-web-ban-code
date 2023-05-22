import {createBrowserRouter} from "react-router-dom";
import App from "../components/App";
import {ListProducts} from "../components/list_products";

export const router = createBrowserRouter([
    {
        path: '/list-products',
        element: <ListProducts/>
    }
])