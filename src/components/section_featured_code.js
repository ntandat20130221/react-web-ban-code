import React, {useState} from "react";
import TitleSection from './title_section_featured_code'
import ListProductFeatured from './list_products_featured'

function SectionFeaturedCode() {

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <TitleSection/>
                </div>
                <ListProductFeatured/>
            </div>
        </section>
    );
}

export default SectionFeaturedCode;
