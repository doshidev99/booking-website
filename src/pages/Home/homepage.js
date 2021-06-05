import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrivateLayout } from '../PrivateLayout'
import AppNotFound from '../../components/AppNotFound'
import 'swiper/swiper.scss';
import './homepage.scss';

import { getAllTourType } from '../../redux/actionTypes'
import { Spin } from 'antd';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const HomePage = () => {
  const dispatch = useDispatch()

  const { loadingState: { loadingGetAllTour, loadingSearch }, tourState: { tours } } = useSelector(currentState => currentState)

  useEffect(() => {
    dispatch({ type: getAllTourType.request })
  }, [dispatch])


  const renderSlide = () => (
    <Swiper
      lazy
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      loop
    >
      {showTopDestination(tours)}
    </Swiper>
  )

  const showTopDestination = (tourDestination) => {
    let result = null;
    const items = [...tourDestination];
    const newItems = [];
    for (let i = 0; i < 5 && i <= newItems.length; i += 1) {
      const idx = Math.floor(Math.random() * items.length);
      newItems.push(items[idx]);
      items.splice(idx, 1);
    }
    // eslint-disable-next-line no-console
    if (newItems !== undefined) {
      result = newItems.map((item, idx) => {
        if (item !== null && item !== undefined) {
          return (
            <SwiperSlide className="swiperSlide" key={idx}>
              <div className="destination-item">
                <div className="img-destination-item">
                  <NavLink to={`/detail-tour/${item._id}`}>
                    {/* <img src={`${USER_IMG}/${item.avatar}`} alt="" /> */}
                    <img src='https://picsum.photos/200' alt="" />

                  </NavLink>
                </div>
                <div className="title-destination-item">
                  <div className="title-item">
                    <p>{item.tourName}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        }
        return null;
      });
    }
    return result;
  }

  const renderAllTour = () => {
    let result = null;
    if (tours.length) {
      result = tours.map((tour, index) => {
        if (tour !== undefined) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={index} lg={4}>
              <div className="our-tour-item">
                <div className="img-tour-item">
                  <NavLink className="navLink" to={`/detail-tour/${tour._id}`}>
                    {/* <img src={`${USER_IMG}/${tour.avatar}`} alt="" /> */}
                    <img src='https://picsum.photos/200' alt="" />
                  </NavLink>
                </div>
                <div className="name-tour">
                  <NavLink to={`/detail-tour/${tour._id}`}>
                    <legend>{tour.tourName}</legend>
                  </NavLink>
                </div>
                <div className="time-price-our-tour">
                  <Row>
                    <Col lg={7}>
                      <div className="qty-people">
                        <span>{`Remain : ${tour.qtyPeople}`}</span>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="price-tour">
                        <fieldset>
                          {tour.priceTour}
                          <span>₫/person</span>
                        </fieldset>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          );
        }
      });
    } else {
      result = <AppNotFound />
    }
    return result;
  }


  if (loadingGetAllTour) return <Spin />

  return (
    <PrivateLayout>
      <div>
        {/* <Header/> */}
        <div className="homePage">
          <Container>

            <div className="our-tour">
              <div className="title-our-tour">
                <legend>Our Tours</legend>
              </div>
              <div className="list-our-tour">
                <Row>
                  {
                    loadingSearch && <Spin />
                  }

                  {renderAllTour()}
                </Row>
              </div>
            </div>

            <div className="top-destination">
              <legend>Top Destination</legend>
              <div className="list-destination">
                {renderSlide()}
              </div>
            </div>

            <div className="travel-tip">
              <div className="title-travel-trip">
                <legend>Travel Tips</legend>
              </div>
              <div className="slide-travel-tip">
                <Swiper
                  autoplay={{ delay: 3000 }}
                  loop
                  scrollbar={{ draggable: true }}
                >

                  <SwiperSlide>
                    <div className="img-slide-travel-tip">
                      {/* <img src={`../../../public/img/t${index + 1}.jpeg`} alt="" /> */}
                      <img src='https://picsum.photos/200
' alt="" />
                    </div>
                  </SwiperSlide>



                </Swiper>
              </div>
            </div>
          </Container>
        </div>
        {/* <Footer/> */}
      </div>
    </PrivateLayout>

  );
}

export default HomePage
