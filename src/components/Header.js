import Cart from './Cart'

function HeaderTop() {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i>k46-it-nlu@gmail.com</li>
                                {/*<li>Free Shipping for all Order of $99</li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="header__top__right">
                            <div className="header__top__right__language">
                                <img src={require('../img/language/language.png')} alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Vietnam</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href=""><i className="fa fa-user"></i>Đăng ký / Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <HeaderTop/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href=""><img src={require('../img/logo/logo.png')} alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <nav className="header__menu">
                            <ul>
                                <li><a href="">Top code</a></li>
                                <li><a href="">Code chất lượng</a></li>
                                <li><a href="">Code tham khảo</a></li>
                                <li><a href="">Code miễn phí</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2"><Cart/></div>
                </div>
            </div>
        </header>
    )
}

export default Header;