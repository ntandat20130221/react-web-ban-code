import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero"
import SectionFeaturedCode from './components/SectionFeaturedCode'

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
                <SectionHero/>
                <SectionFeaturedCode/>
                <Footer/>
            </div>
        </Provider>
    )
}

export default App;
