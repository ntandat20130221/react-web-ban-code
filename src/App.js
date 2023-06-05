import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'

import HomePage from './components/HomePage/HomePage'
import Profile from "./components/ProfilePage/Profile";

import {store} from './redux/Store'
import {Provider} from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <HomePage/>
            <Profile/>
        </Provider>
    )
}

export default App;
