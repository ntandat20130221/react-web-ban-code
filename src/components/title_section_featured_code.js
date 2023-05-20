import React, {useState} from "react";

function TitleSection(){

    // Tạo state địa phương activeItem và hàm setActiveItem để cập nhật giá trị của state
    const [activeItem, setActiveItem] = useState(null);

    // Hàm xử lý sự kiện click, cập nhật giá trị của activeItem và hiển thị thông báo alert
    const handleClick = (filter) => {
        setActiveItem(filter);
        alert(`Clicked on ${filter}`);
    };

    return(
        <div className="col-lg-12">
            <div className="section-title">
                <h2>CODE NỔI BẬT</h2>
            </div>
            {/*<div className="featured__controls">*/}
            {/*    <ul>*/}
            {/*        <li*/}
            {/*            className={activeItem === ".android" ? "active" : ""}*/}
            {/*            data-filter=".android"*/}
            {/*            onClick={() => handleClick(".android")}>*/}
            {/*            Android*/}
            {/*        </li>*/}
            {/*        <li*/}
            {/*            className={activeItem === ".iOS" ? "active" : ""}*/}
            {/*            data-filter=".iOS"*/}
            {/*            onClick={() => handleClick(".iOS")}>*/}
            {/*            iOS*/}
            {/*        </li>*/}
            {/*        <li*/}
            {/*            className={activeItem === ".php" ? "active" : ""}*/}
            {/*            data-filter=".php"*/}
            {/*            onClick={() => handleClick(".php")}>*/}
            {/*            PHP*/}
            {/*        </li>*/}
            {/*        <li*/}
            {/*            className={activeItem === ".java" ? "active" : ""}*/}
            {/*            data-filter=".java"*/}
            {/*            onClick={() => handleClick(".java")}>*/}
            {/*            Java*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}

export default TitleSection;