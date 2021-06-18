import React, {Component} from 'react';
import './footer.scss';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import {Container, Row, Col, Form} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="bg-footer">
                        <div className="img-bg-footer">
                            <img src="../../../img/footer3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="subscribeToOur">
                        <Container>
                            <div className="bg-subscribeToOur">
                                <legend>Đăng ký để nhận các ưu đãi khuyến mãi</legend>
                                <div className="input-subscribe-footer">
                                    <Form>
                                        <Form.Control
                                            className="input-subs"
                                            type="text"
                                            placeholder="Your Email"
                                        />
                                    </Form>
                                    <div className="button-subs">
                                        <button type="submit">
                                            <span>Gửi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="footer-bottom">
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className="footer-bottom-item-left">
                                        <div className="logo-footer">
                                            <div className="img-logo-footer">
                                                <img
                                                    src="../../../img/s-removebg.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="description-footer-item-left">
                                            <p>
                                                Công ty cổ phần DTU TOUR
                                            </p>
                                            <p>
                                                Địa chỉ : 03 Quang Trung, tp Đà Nẵng
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="footer-bottom-item-right">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Về DTU TOUR
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Cách đặt tour
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Liên hệ
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Trợ giúp
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Tuyển dụng
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Theo dõi tôi
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Facebook
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Instagram
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Youtube
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Đặt tour
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Khác
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Chính sách bảo mật
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Điều khoản & điều kiện
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Quy chế hoạt động
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Tải ứng dụng
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
