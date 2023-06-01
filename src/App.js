import Header from './components/Commons/Header'
import Footer from './components/Commons/Footer'
import Banner from './components/HomePage/Banner'
import SectionFeaturedCode from './components/HomePage/SectionFeaturedCode'

import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'

import {store} from './redux/Store'
import {Provider} from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <Banner/>
                <SectionFeaturedCode/>
                <Footer/>
            </div>
        </Provider>
    )
}

export default App;
