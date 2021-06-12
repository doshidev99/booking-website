import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import AllTourPage from './pages/AllTourPage';
import PageDashBoard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/Home/homepage';
import LoginPage from './pages/Login';
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
import PageRegister from './pages/Register';


function App() {
    const {
        authState: { token },
    } = useSelector((currentState) => currentState);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/all-tour" component={AllTourPage} />
                    <Route path="/detail-tour/:tourID" component={DetailPage} />
                    <Route path="/register" exact component={PageRegister} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route exact path="/">
                        {!token ? <Redirect to="/login" /> : <HomePage />}
                    </Route>
                    <Route
                        exact
                        path="/admin/dashboard"
                        component={PageDashBoard}
                    />

                    <Route path="/admin/all-tour" component={PageAllTour} />
                    <Route path="/admin/add-tour" component={PageAddTour} />
                    <Route path="/admin/edit-tour" component={PageEditTour} />

                    <Route
                        exact
                        path="/admin/all-user"
                        component={PageAllUser}
                    />
                    <Route path="/admin/add-user" component={PageAddUser} />
                    <Route
                        exact
                        path="/admin/edit-user"
                        component={PageEditUser}
                    />

                    <Route exact path="/admin/all-employee" component={PageAllEmployee} />
                    <Route exact path="/admin/add-employee" component={PageAddEmployee} />
                    <Route exact path="/admin/edit-employee" component={PageEditEmployee} />

                    <Route exact path="/admin/chat" component={Chat} />
                    <Route exact path="/admin/chat/:id" component={Chat} />

                    <Route exact path="/admin/chat" component={Chat} />

                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
