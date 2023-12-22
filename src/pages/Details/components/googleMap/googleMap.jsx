import React from "react";
import Card from 'react-bootstrap/Card';

import classnames from "classnames/bind";
import styles from "./googleMap.module.scss";
const cb = classnames.bind(styles);

function GoogleMap() {
    return (<div>
        <Card
            text="white"
            className={cb("mb-3", "card_optimized")}
        >
            <Card.Header className={cb("card-header", "nav_Text", "text-bold", "m-0")}>LIÊN HỆ CHỦ TRỌ</Card.Header>
            <Card.Body>
                <Card.Title className={cb("title")} as={"a"} href="tel:0396448870">
                    <p className={cb("nav_Text", "text-bold")}>039 644 8870</p>
                </Card.Title>
                <Card.Text>

                </Card.Text>
            </Card.Body>
        </Card>
    </div>);
}

export default GoogleMap;