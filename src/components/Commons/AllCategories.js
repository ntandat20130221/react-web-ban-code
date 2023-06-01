function AllCategories() {
    return (
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>Danh mục</span>
            </div>
            <ul>
                <li><a href="">Android</a></li>
                <li><a href="">iOS</a></li>
                <li><a href="">PHP & MYSQL</a></li>
                <li><a href="">JAVA/JSP</a></li>
                <li><a href="">Xem tất cả</a></li>
            </ul>
        </div>
    )
}

export default AllCategories;