import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero"
import SectionSubHero from "./components/SectionSubHero"
import SectionFeaturedCode from './components/SectionFeaturedCode'
import SectionBreadcrumb from './components/SectionBreadcrumb'
import SectionLogin from "./components/SectionLogin";
import SectionRegister from "./components/SectionRegister";
import SectionForgotPass from "./components/SectionForgotPass";
import SectionChangePass from "./components/SectionChangePass";
import ProductDetails from "./components/ProductDetails";

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
            <SectionSubHero/>
            {/*<SectionHero/>*/}
            <SectionFeaturedCode/>
            <Footer/>
            <ProductDetails/>
        </div>
    )
}

export default App;
