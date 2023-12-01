/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Content/js/header/header";
import Footer from "../../Content/js/footer/footer";
import classnames from "classnames/bind";
import styles from "./details.module.scss";
import APIs from "../../Content/API";
import Image from 'react-bootstrap/Image';

const cb = classnames.bind(styles)

function Details() {
    const id = Number(sessionStorage.getItem("detailsPage"));
    const result = APIs.bodyAPIs.detailList.find((Id) => Id.id = id);

    return ( 
        <>
            <Header />

            <div className={cb("body")}>
                <div className={cb("container")}>

                   <div className={cb("banner")}>
                        <Image src={result.images[0].path} fluid={true} />
                    </div> 

                </div>
            </div>

            <Footer />
        </>

     );
}

export default Details;