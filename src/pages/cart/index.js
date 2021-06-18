import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingType, getAllBookingType, getMeType } from '../../redux/actionTypes';

import { PrivateLayout } from '../PrivateLayout';
import './cart.scss';
const MyCart = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        count: 0,
    })


    const {
        loadingState: { loadingGetAllBooking },
        tourState: { carts, isRefresh },
        profileState: { profile },
    } = useSelector((cS) => cS);

    useEffect(() => {
        dispatch({ type: getMeType.request });
    }, [dispatch]);

    useEffect(() => {
        if (profile._id) {
            dispatch({ type: getAllBookingType.request, payload: profile._id })
        }
    }, [profile._id, isRefresh])

    const increment = () => {
        if (state.count >= 0) {
            setState((cS) => ({ count: cS.count + 1 }))
        }
    }

    const decrement = () => {
        if (state.count > 0) {
            setState((cS) => ({ count: cS.count - 1 }))
        }
    }


    const handleDelete = (id) => {

        const payload = {
            userID: profile._id, tourID: id
        }

        dispatch({ type: deleteBookingType.request, payload })
    }


    const totalMoney = carts && carts.reduce((t, c) => { return t += (+c.tourID.priceTour) }, 0)

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
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts &&
                                carts?.map((item) => (
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="product-inline">
                                                <div className="img-small">
                                                    <img src="../../../img/bg-h-1.jpg" />
                                                </div>
                                                <p className="name-product">
                                                    {item.tourID.tourName}
                                                </p>
                                            </div>
                                        </td>
                                        <td> {item.tourID.priceTour.toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'vnd',
                                        })}</td>
                                        {/* <td className="center-on-small-only">
                                            <div
                                                className="btn-group radio-group"
                                                data-toggle="buttons"
                                            >
                                                <Button variant="warning"
                                                    onClick={decrement}
                                                >-</Button>
                                                <span
                                                    className="qty"
                                                    style={{
                                                        padding: '0 10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {item.tourID.qtyPeople}
                                                </span>
                                                <Button variant="warning"
                                                    onClick={increment}
                                                >+</Button>
                                            </div>
                                        </td> */}
                                        {/* <td>{(item.tourID.priceTour * state.count).toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'vnd',
                                        })}</td> */}
                                        <td>
                                            <Button variant="info">Chờ xác nhận</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(item.tourID._id)}>
                                                <i class="far fa-trash-alt"></i>
                                            </Button>
                                        </td>
                                        <td></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="total-cart">
                    <span>Total : {totalMoney.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'vnd',
                    })}</span>
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
