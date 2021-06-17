import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Spin, Space } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './pageLogin.scss';
import { loginType } from '../../redux/actionTypes';

import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({});

    const history = useHistory()
    const {
        loadingState: { loadingLogin },
    } = useSelector((currentState) => currentState);

    const onChange = (e) => {
        setState((cs) => ({ ...cs, [e.target.name]: e.target.value }));
    };

    const onSubmit = (values) => {
        dispatch({ type: loginType.request, payload: values, history });
    };

    if (loadingLogin) return <Spin />;
    return (
        <div className="pageLogin">
            <section className="section">
                <div className="d-flex flex-wrap align-items-stretch">
                    <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
                        <div className="p-4 m-3">
                            <img
                                src="../../../img/logoLogin.svg"
                                alt="logo"
                                width="80"
                                className="shadow-light rounded-circle mb-5 mt-2"
                            />
                            <h4 className="text-dark font-weight-normal">
                                Welcome to
                                <span className="font-weight-bold">
                                    DTU TOUR
                                </span>
                            </h4>
                            <p className="text-muted">
                                Before you get started, you must login or
                                register if you don't already have an account.
                            </p>



                            {/*  */}

                            <Formik
                                initialValues={{
                                    txt_userName: '',
                                    txt_password: ''
                                }}

                                validationSchema={
                                    Yup.object().shape({
                                        txt_userName: Yup.string('Please enter your gmail').required(),
                                        txt_password: Yup.string('Please enter your password').required(),
                                    })
                                }
                                onSubmit={(values) => onSubmit(values)}
                            >
                                {({
                                    errors, values, handleChange, handleSubmit,
                                }) => (
                                    <Form className="form_" encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                                type="text"
                                                name="txt_userName"
                                                placeholder="Email"
                                                onChange={handleChange}
                                            />
                                            <Form.Text className="d-flex text-danger">
                                                {errors.txt_userName}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                                type="password"
                                                name="txt_password"
                                                placeholder="password"
                                                onChange={handleChange}
                                            />
                                            <Form.Text className="d-flex text-danger">
                                                {errors.txt_password}
                                            </Form.Text>
                                        </Form.Group>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    name="remember"
                                                    className="custom-control-input"
                                                    tabIndex="3"
                                                    id="remember-me"
                                                    style={{
                                                        marginRight: 5
                                                    }}
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="remember-me"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>


                                        <div className="form-group text-right">
                                            <Link to="#" className="float-left mt-3">
                                                Forgot Password?
                                            </Link>
                                            <Button
                                                type="submit"
                                                className="btn btn-primary btn-lg btn-icon icon-right"
                                                tabIndex="4"
                                                style={{
                                                    marginLeft: 5
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </div>

                                        <div className="mt-5 text-center">
                                            Don't have an account?
                                            <Link to="/register">Create new one</Link>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                            <div className="text-center mt-5 text-small">
                                Copyright &copy; Your Company. Made with 💙 by
                                Stisla
                                <div className="mt-2">
                                    <Link to="#">Privacy Policy</Link>
                                    <div className="bullet" />
                                    <Link to="#">Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom">
                        <div className="imgBGLogin" style={{ width: '100%' }}>
                            <img
                                style={{ width: '100%' }}
                                alt=""
                                src="../../../../img/logoLogin.svg"
                            />
                        </div>
                        <div className="absolute-bottom-left index-2">
                            <div className="text-light p-5 pb-2">
                                <div className="mb-5 pb-3">
                                    <h5 className="mb-2 display-4 font-weight-bold">
                                        WellCome To WanderLust - Tour
                                    </h5>
                                    {/* <h5 className="font-weight-normal text-muted-transparent">Well Come To WanderLust - Tour</h5> */}
                                </div>
                                {/* Photo by <a className="text-light bb" target="_blank" href="https://unsplash.com/photos/a8lTjWJJgLA">Justin Kauffman</a> on <a className="text-light bb" target="_blank" href="https://unsplash.com">Unsplash</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
