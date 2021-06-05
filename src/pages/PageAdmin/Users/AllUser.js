import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../AdminLayout/AdminLayout';
// import { actDeleteUserReq, actFetchAllTUserReq } from '../../../../actions/actUser';
import './AllUser.scss';

class PageAllUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUser();
  }

    handleOnClickDeleteUser = (userID) => {
      this.props.onDeleteUser(userID);
    }

    // showListUser = (users) => {
    //   let result = null;
    //   if (users.length > 0) {
    //     result = users.map((user, index) => {
    //       if (user !== undefined) {
    //         return (
    //           <tr key={index}>
    //             <td>{user.userName}</td>
    //             <td>{user.password}</td>
    //             <td>{user.email}</td>
    //             <td>{user.numberPhoneUser}</td>
    //             <td className="td-action">
    //               <Button
    //                 variant="danger"
    //                 onClick={() => { this.handleOnClickDeleteUser(user._id); }}
    //               >
    //                 Del
    //               </Button>
    //               <Link to={`/admin/edit-user/${user._id}`}>
    //                 <Button>
    //                   Edit
    //                 </Button>
    //               </Link>
    //             </td>
    //           </tr>
    //         );
    //       }
    //     });
    //   }
    //   return result;
    // }

    render() {
      const { users } = this.props;
      return (
        <AdminLayout>
          <div className="pagealluser">
          <Container>
            <div className="table-all-user">
              <legend>All User</legend>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Pass word</th>
                    <th>Email</th>
                    <th>Number Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>$100</td>
                    <td>January</td>
                    <td>$100</td>
                    <td>
                        <div className = "btnAction">
                            <Link to = "/admin/edit-user">
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                            </Link>
                            <button type="button" class="btn btn-danger">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td>January</td>
                    <td>$100</td>
                    <td>January</td>
                    <td>$100</td>
                    <td>
                        <div className = "btnAction">
                            <Link to = "/admin/edit-user">
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                            </Link>
                            <button type="button" class="btn btn-danger">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                  </tr>
                </tbody>
                {/* <tbody>
                  { this.showListUser(users) }
                </tbody> */}
              </Table>
            </div>
          </Container>
        </div>
        </AdminLayout>
      );
    }
}

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDisPatchToProps = (dispatch, props) => ({
  fetchAllUser: () => {
    // dispatch(actFetchAllTUserReq());
  },
  onDeleteUser: (userID) => {
    // dispatch(actDeleteUserReq(userID));
  },
});

export default connect(mapStateToProps, mapDisPatchToProps)(PageAllUser);
