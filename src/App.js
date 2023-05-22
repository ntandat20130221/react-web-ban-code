import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero"
import SectionFeaturedCode from './components/SectionFeaturedCode'
import SectionBreadcrumb from './components/SectionBreadcrumb'

import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/style.css'

function App() {
    return (
        <div>
            <Header/>
            {/*<SectionBreadcrumb/>*/}
            <SectionHero/>
            <SectionFeaturedCode/>
            <Footer/>
        </div>
    )
}

export default App;
