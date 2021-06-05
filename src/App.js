import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import HomePage from './pages/Home/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
