import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingType, getAllBookingAdminType } from '../../../redux/actionTypes';
import { AdminLayout } from '../../AdminLayout/AdminLayout';
import './AllUser.scss';


const PageBooking = () => {
  const dispatch = useDispatch();

  // const handleDelete = (idUser, idTour) => {

  //   const payload = {
  //     userID: idUser, tourID: idTour
  //   }
  //   // dispatch({ type: deleteBookingType.request, payload })
  // }

  const {
    loadingState: { loadingGetAllBooking },
    tourState: { listCarts, isRefresh },
  } = useSelector((cS) => cS);


  useEffect(() => {
    dispatch({ type: getAllBookingAdminType.request })
  }, [isRefresh])

  // eslint-disable-next-line no-console
  console.log(listCarts, '<-listCarts---');

  return (
    <AdminLayout>
      <div className="pagealluser">
        <Container>
          <div className="table-all-user">
            <legend>Client Bookings</legend>
            <Table striped bordered hover>
              {
                loadingGetAllBooking ? (
                  <Spin />
                ) : (

                  <>
                    <thead>
                      <tr>
                        <th>Tours</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {
                        listCarts.length > 0 &&
                        listCarts.map(item => (
                          <tr>
                            <td>{item.tourInCart[0].tourID.tourName}</td>
                            <td> {item.tourInCart[0].tourID.priceTour.toLocaleString('vi', {
                              style: 'currency',
                              currency: 'vnd',
                            })}</td>
                            <td>  {item.tourInCart[0].tourID.qtyPeople}</td>
                            <td>{(item.tourInCart[0].tourID.priceTour).toLocaleString('vi', {
                              style: 'currency',
                              currency: 'vnd',
                            })}</td>
                            {/* <td>
                              <div className="btnAction d-flex justify-content-center">
                                <button type="button" class="btn btn-danger"
                                  onClick={() => handleDelete(listCarts[0].userID._id, item._id)}
                                >
                                  <i className="far fa-trash-alt"></i>
                                </button>
                              </div>
                            </td> */}
                          </tr>
                        ))
                      }
                    </tbody>

                  </>
                )
              }
            </Table>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
}


export default PageBooking
