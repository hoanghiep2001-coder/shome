import React from "react";
import Header from "../../Content/js/header/header";
import Footer from "../../Content/js/footer/footer";
import classnames from "classnames/bind";
import styles from "./details.module.scss";
const cb = classnames.bind(styles)

function Details({id}) {
    console.log(id);

    return ( 
        <>
            <Header />

            <div className={cb("body")}>
                <div className={cb("container")}></div>
            </div>

            <Footer />
        </>

     );
}

export default Details;