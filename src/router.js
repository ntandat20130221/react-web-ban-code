import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {ListProducts} from "./components/ListProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ListProducts/>
    },
    {
        path: '/list-products',
        element: <ListProducts/>
    }
])