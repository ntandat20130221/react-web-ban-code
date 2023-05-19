import Header from "./components/header";
import Footer from "./components/footer";
import SectionHero from "./components/section_hero"
import SectionCategories from './components/section_categories'
import SectionFeaturedCode from './components/section_featured_code'
import SectionBreadcrumb from './components/section_breadcrumb'

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
            {/*<SectionCategories/>*/}
            <SectionFeaturedCode/>
            <Footer/>
        </div>
    )
}

export default App;
