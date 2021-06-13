import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router, Route,
    Switch
} from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import LoginPage from './pages/Login';
import PrivateRoute from './route/private';
import PageRegister from './pages/Register';
import { history } from './redux/store';


function App() {
    const {
        authState: { token },
    } = useSelector((currentState) => currentState);

    if (!token) {
        history.push('/login')
    }
    return (
        <div className="App">
            <Router>
                <Switch>
                    {
                        !token ? (
                            <>
                                <Route path="/register" exact component={PageRegister} />
                                <Route path="/login" exact component={LoginPage} />
                            </>
                        ) : (
                            <Route path="/"  component={PrivateRoute} />
                        )
                    }


                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
