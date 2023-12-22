/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Content/js/header/header";
import Footer from "../../Content/js/footer/footer";
import APIs from "../../Content/API";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTelephoneOutboundFill, BsBookmarkCheckFill } from "react-icons/bs";
import { calculateRating } from "../function/utils";
import classnames from "classnames/bind";
import styles from "./details.module.scss";
import GoogleMap from "./components/googleMap/googleMap";
const cb = classnames.bind(styles)

function Details() {
    const id = Number(sessionStorage.getItem("detailsPage"));
    const result = APIs.bodyAPIs.detailList.find((Id) => Id.id === id);
    const rating = calculateRating(result.rating);

    return (
        <>
            <Header />

            <div className={cb("body")}>
                <Container>
                    <div className={cb("banner", "pad-t-60")}>
                        <Image src={result.images[0].path} fluid={true} className={cb("image")} />
                    </div>
                    <div className={cb("pad-t-36", "pad-b-36")}>
                        <Navbar bg="light" data-bs-theme="light" className={cb("navBar_container")}>
                            <Container>
                                <Nav className={cb("me-auto", "nav_list")}>
                                    <div className={cb("nav_Left")}>
                                        <Nav.Link className={cb("nav_Text")} href="#">Tổng Quan</Nav.Link>
                                        <Nav.Link className={cb("nav_Text")} href="#">Tiện ích</Nav.Link>
                                        <Nav.Link className={cb("nav_Text")} href="#">Video review phòng</Nav.Link>
                                        <Nav.Link className={cb("nav_Text")} href="#">Đánh giá</Nav.Link>
                                        <Nav.Link className={cb("nav_Text")} href="#">Chính sách</Nav.Link>
                                    </div>
                                    <div className={cb("nav_Right")}>
                                        <Nav.Link className={cb("nav_Text")} href="#">{result.price} <span className={cb("nav_Span")}>/tháng</span></Nav.Link>
                                        <Nav.Link className={cb("nav_Text", "nav_Button")} href="#">ĐẶT LỊCH XEM PHÒNG</Nav.Link>
                                    </div>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>


                    <Row className={cb("row")}>
                        <Col xl={9}>
                            <Card className={cb("card_optimized")}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className={cb("list-group-item")}>
                                        <h4 className={cb("card_title")}>{result.title}</h4>
                                        <div className={cb("card_rate")}>
                                            {rating}
                                            <a className={cb("onMap", "pr-4")} href="#map">- Xem Trên Bản Đồ</a>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className={cb("list-group-item")}>
                                        <p className="mb-4">Căn phòng thiết kế xây dựng gồm: cửa chính, cửa sổ, cửa nhà vệ sinh chắc chắn, phòng
                                            thoáng mát cùng cách bố trí nội thất gọn gàng, tiện nghi cho người ở.</p>
                                        <div>
                                            {result.describes.map(describe => {
                                                return <div className={cb("card_describe")}>
                                                    <BsBookmarkCheckFill fontSize={20} color="black"/>
                                                    <p className={cb("ms-3", "content")}>{describe.content}</p>
                                                </div>
                                            })}
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col xl={3} className="">
                            <Card
                                text="white"
                                className={cb("mb-3", "card_optimized")}
                            >
                                <Card.Header className={cb("card-header", "nav_Text", "text-bold", "m-0")}>LIÊN HỆ CHỦ TRỌ</Card.Header>
                                <Card.Body>
                                    <Card.Title className={cb("title")} as={"a"} href="tel:0396448870">
                                        <BsFillTelephoneOutboundFill fontSize={32} color="black" />
                                        <p className={cb("nav_Text", "text-bold")}>039 644 8870</p>
                                    </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card
                                text="white"
                                className={cb("mb-3", "card_optimized")}
                            >
                                <Card.Header className={cb("card-header", "nav_Text", "text-bold", "m-0")}>8,2 Hài Lòng</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle as={"a"} href="#" className={cb("mb-2", "text-muted", "card_subtitle")}>5 bài đánh giá</Card.Subtitle>
                                    <div className="d-flex flex-lg-wrap mt-3">
                                        <br></br>
                                        <Card.Link className={cb("card_link")} href="#">Dịch vụ 7,4</Card.Link>
                                        <Card.Link className={cb("card_link")} href="#">Tiện nghi 7,5</Card.Link>
                                        <Card.Link className={cb("card_link")} href="#">Vị trí 8,3</Card.Link>
                                        <Card.Link className={cb("card_link")} href="#">An ninh 8,1</Card.Link>
                                        <Card.Link className={cb("card_link")} href="#">Sạch sẽ 7,8</Card.Link>
                                        <Card.Link className={cb("card_link")} href="#">Đáng giá tiền 7,2</Card.Link>         
                                    </div>
                               
                                </Card.Body>
                            </Card>

                            <GoogleMap/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </>

    );
}

export default Details;