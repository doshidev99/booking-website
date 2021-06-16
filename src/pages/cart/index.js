import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap';

import {PrivateLayout} from '../PrivateLayout';
import './cart.scss';
const MyCart = () => {
    return (
        <PrivateLayout>
            <section className="section-my-cart">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tours</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th>action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="product-inline">
                                        <div className="img-small">
                                            <img src="../../../img/bg-h-1.jpg" />
                                        </div>
                                        <p className="name-product">
                                            Tour DakLak
                                        </p>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td className="center-on-small-only">
                                    <div
                                        className="btn-group radio-group"
                                        data-toggle="buttons"
                                    >
                                        <Button variant="warning">-</Button>
                                        <span
                                            className="qty"
                                            style={{
                                                padding: '0 10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            10
                                            {/* {quantity} */}
                                        </span>
                                        <Button variant="warning">+</Button>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td>
                                    <Button variant="danger">
                                        <i class="far fa-trash-alt"></i>
                                    </Button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="product-inline">
                                        <div className="img-small">
                                            <img src="../../../img/bg-h-1.jpg" />
                                        </div>
                                        <p className="name-product">
                                            Tour DakLak
                                        </p>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td className="center-on-small-only">
                                    <div
                                        className="btn-group radio-group"
                                        data-toggle="buttons"
                                    >
                                        <Button variant="warning">-</Button>
                                        <span
                                            className="qty"
                                            style={{
                                                padding: '0 10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            10
                                            {/* {quantity} */}
                                        </span>
                                        <Button variant="warning">+</Button>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td>
                                    <Button variant="danger">
                                        <i class="far fa-trash-alt"></i>
                                    </Button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="product-inline">
                                        <div className="img-small">
                                            <img src="../../../img/bg-h-1.jpg" />
                                        </div>
                                        <p className="name-product">
                                            Tour DakLak
                                        </p>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td className="center-on-small-only">
                                    <div
                                        className="btn-group radio-group"
                                        data-toggle="buttons"
                                    >
                                        <Button variant="warning">-</Button>
                                        <span
                                            className="qty"
                                            style={{
                                                padding: '0 10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            10
                                            {/* {quantity} */}
                                        </span>
                                        <Button variant="warning">+</Button>
                                    </div>
                                </td>
                                <td>10000000000</td>
                                <td>
                                    <Button variant="danger">
                                        <i class="far fa-trash-alt"></i>
                                    </Button>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="total-cart">
                    <span>Total : 200000000</span>
                    <div className="btn-pay">
                        <Button variant="warning">
                            <i class="fab fa-amazon-pay"></i>
                            Pay
                        </Button>
                    </div>
                </div>
            </section>
        </PrivateLayout>
    );
};

export default MyCart;
