/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Content/js/header/header";
import Footer from "../../Content/js/footer/footer";
import classnames from "classnames/bind";
import styles from "./details.module.scss";
import APIs from "../../Content/API";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FaRegUserCircle } from "react-icons/fa";


const cb = classnames.bind(styles)

function Details() {
    const id = Number(sessionStorage.getItem("detailsPage"));
    const result = APIs.bodyAPIs.detailList.find((Id) => Id.id === id);

    console.log(result);
    return (
        <>
            <Header />

            <div className={cb("body")}>
                <Container>
                    <div className={cb("banner", "pad-t-60")}>
                        <Image src={result.images[0].path} fluid={true} className={cb("image")} />
                    </div>


                    <Row className={cb("pad-t-60", "row")}>
                        <Col xl={9}></Col>
                        <Col xl={3}>
                            <Card 
                                bg={"primary"}  
                                style={{ width: '18rem' }}
                                text="white"
                                className="mb-2"
                            >
                                <Card.Header>LIÊN HỆ CHỦ TRỌ</Card.Header>
                                    <Card.Body>
                                        <Card.Title className={cb("title")}> 
                                            <FaRegUserCircle fontSize={30}/>    
                                            <p className={cb("text")}>0396448870</p>
                                        </Card.Title>
                                        <Card.Text>
                                       
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </>

    );
}

export default Details;