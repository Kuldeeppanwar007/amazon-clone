// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    // 
    <Router>

      <div className="App">
        {/* {Header} */}
        <Header />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/checkout"><Checkout /> </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
