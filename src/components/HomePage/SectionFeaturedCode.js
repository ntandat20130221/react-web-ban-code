import React, {useState} from "react";
import ListProductFeatured from './ListProductsFeatured'

function TitleSection() {

    return (
        <div className="col-lg-12">
            <div className="section-title">
                <h2>CODE NỔI BẬT</h2>
            </div>
        </div>
    )

}

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

export {TitleSection};

export default SectionFeaturedCode;
