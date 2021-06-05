import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import HomePage from './pages/Home/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageDashBoard from './pages/dashboard/DashBoard';
import PageAllTour from './pages/PageAdmin/Tours/AllTour';
import PageAddTour from './pages/PageAdmin/Tours/AddTour';
import PageEditTour from './pages/PageAdmin/Tours/EditTour';

import PageAllUser from "./pages/PageAdmin/Users/AllUser";
import PageAddUser from "./pages/PageAdmin/Users/AddUser";
import PageEditUser from "./pages/PageAdmin/Users/EditUser";

import PageAllEmployee from './pages/PageAdmin/Employee/AllEmployee';
import PageAddEmployee from './pages/PageAdmin/Employee/AddEmployee';
import PageEditEmployee from './pages/PageAdmin/Employee/EditEmployee';

import Chat from "./pages/PageAdmin/Chat/Chat";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/admin/dashboard" component={PageDashBoard} />

          <Route path="/admin/all-tour" component={PageAllTour} />
          <Route path="/admin/add-tour" component={PageAddTour} />
          <Route path="/admin/edit-tour" component={PageEditTour} />

          <Route exact path="/admin/all-user" component={PageAllUser} />
          <Route path="/admin/add-user" component={PageAddUser} />
          <Route exact path="/admin/edit-user" component={PageEditUser} />

          <Route exact path="/admin/all-employee" component={PageAllEmployee} />
          <Route exact path="/admin/add-employee" component={PageAddEmployee} />
          <Route exact path="/admin/edit-employee" component={PageEditEmployee} />
          
          <Route exact path="/admin/chat" component={Chat} />

          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
