import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import LoginPage from './pages/Login';
import PrivateRoute from './route/private';
import PageRegister from './pages/Register';
import {history} from './redux/store';

import AllTourPage from './pages/AllTourPage';
import PageDashBoard from './pages/dashboard/index';
import DetailPage from './pages/DetailPage';
import Chat from './pages/PageAdmin/Chat/Chat';
import PageAddEmployee from './pages/PageAdmin/Employee/AddEmployee';
import PageAllEmployee from './pages/PageAdmin/Employee/AllEmployee';
import PageEditEmployee from './pages/PageAdmin/Employee/EditEmployee';
import PageAddTour from './pages/PageAdmin/Tours/AddTour';
import PageAllTour from './pages/PageAdmin/Tours/AllTour';
import PageEditTour from './pages/PageAdmin/Tours/EditTour';
import PageAddUser from './pages/PageAdmin/Users/AddUser';
import PageAllUser from './pages/PageAdmin/Users/AllUser';
import PageEditUser from './pages/PageAdmin/Users/EditUser';
import HomePage from './pages/Home/homepage';
import AdminLogin from './pages/AdminLogin';
import PublicRoute from './route/Public';
import MyCart from './pages/cart/index';
import LoginAdmin from './pages/LoginAdmin';

function App() {
    // const {
    //     authState: { token },
    // } = useSelector((currentState) => currentState);

    // if (!token) {
    //     history.push('/login');
    // }

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/my-cart" exact component={MyCart} />
                    <Route path="/register" exact component={PageRegister} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/admin/login" exact component={LoginAdmin} />
                    {/* <Route path="/admin/login" exact component={AdminLogin} /> */}

                    <Route path="/all-tour" exact component={AllTourPage} />
                    <Route
                        path="/detail-tour/:tourID"
                        exact
                        component={DetailPage}
                    />
                    <Route
                        path="/all-tour/:tourID"
                        exact
                        component={DetailPage}
                    />

                    <PrivateRoute
                        exact
                        path="/admin/dashboard"
                        component={PageDashBoard}
                    />
                    <PrivateRoute
                        path="/admin/all-tour"
                        component={PageAllTour}
                    />
                    <PrivateRoute
                        path="/admin/add-tour"
                        component={PageAddTour}
                    />
                    <PrivateRoute
                        path="/admin/edit-tour"
                        component={PageEditTour}
                    />
                    <PrivateRoute
                        exact
                        path="/admin/all-user"
                        component={PageAllUser}
                    />
                    <PrivateRoute
                        path="/admin/add-user"
                        component={PageAddUser}
                    />
                    <PrivateRoute
                        exact
                        path="/admin/edit-user"
                        component={PageEditUser}
                    />

                    <PrivateRoute
                        exact
                        path="/admin/all-employee"
                        component={PageAllEmployee}
                    />
                    <PrivateRoute
                        exact
                        path="/admin/add-employee"
                        component={PageAddEmployee}
                    />
                    <PrivateRoute
                        exact
                        path="/admin/edit-employee"
                        component={PageEditEmployee}
                    />

                    <PrivateRoute exact path="/admin/chat" component={Chat} />
                    <PrivateRoute
                        exact
                        path="/admin/chat/:id"
                        component={Chat}
                    />
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
