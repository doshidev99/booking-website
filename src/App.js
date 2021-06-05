import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import HomePage from './pages/Home/homepage';
import LoginPage from './pages/Login';
import PageRegister from './pages/Register';
import DetailPage from './pages/DetailPage';
import AllTourPage from './pages/AllTourPage';


function App() {
  const { authState: { token } } = useSelector(currentState => currentState)

  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route path="/all-tour" component={AllTourPage} />
          <Route path="/detail-tour/:tourID" component={DetailPage} />
          <Route path="/register" exact component={PageRegister} />
          <Route path="/login" exact component={LoginPage} />
          <Route exact path="/">
            {!token ? <Redirect to="/login" /> : <HomePage />}
          </Route>
          <Route component={NotFoundPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
