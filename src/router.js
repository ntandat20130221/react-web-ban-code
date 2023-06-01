import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {ListProducts} from "./components/TopCodePage/ListProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/list-products',
        element: <ListProducts/>
    }
])