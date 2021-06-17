import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import AppNotFound from '../../components/AppNotFound';
import { PrivateLayout } from '../PrivateLayout';

import { getTourByIdType, bookingType } from '../../redux/actionTypes';

import './detailpage.scss';
import { Spin } from 'antd';
import { TOUR_IMG } from '../../utils';
import { useHistory } from 'react-router-dom';

const DetailPage = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const { tourID } = useParams();

    useEffect(() => {
        dispatch({ type: getTourByIdType.request, payload: tourID });
    }, [dispatch, tourID]);

    const {
        loadingState: { loadingGetTourById },
        tourState: { singleTours },
    } = useSelector((cS) => cS);


    const showDetailTour = () => {
        if (Object.keys(singleTours).length) {
            return (
                <div className="detail-tour">
                    <div className="title-detail-tour">
                        <legend>{singleTours.tourName}</legend>
                    </div>
                    <div className="img-detail-tour">
                        {/* <img src={`${TOUR_IMG}/${singleTours.avatar}`} alt="" /> */}
                    </div>
                    <div className="description-detail-tour">
                        <div className="description-detail">
                            <div className="title-description-detail">
                                <legend>Description</legend>
                            </div>
                            <div className="description-detail-zone">
                                {singleTours.descriptionTour}
                            </div>
                        </div>
                    </div>
                    <div className="description-detail-tour">
                        <div className="description-detail">
                            <div className="title-description-detail">
                                <legend>Detail</legend>
                            </div>
                            <div className="description-detail-zone">
                                {singleTours.detailTour}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const onHandleAdd = () => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch({ type: bookingType.request, payload: singleTours });
        } else {
            history.push('/login')
        }
    };

    return (
        <PrivateLayout>
            {loadingGetTourById ? (
                <Spin />
            ) : (
                <div className="detail-page">
                    <Container>
                        {showDetailTour()}
                        <div className="btn-order-tour">
                            <Button variant="warning" onClick={onHandleAdd}>
                                Add To Cart
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </PrivateLayout>
    );
};

export default DetailPage;
