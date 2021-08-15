// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './stateProvider';
import Register from './Register';

function App() {
  const [ {},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      console.log("auth user >>>", authUser)

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })


      }


    })


  }, [])
  return (
    // 
    <Router>

      <div className="App">
        {/* {Header} */}
        <Header />
        <Switch>

          <Route exact path="/register"><Register /> </Route>
          <Route exact path="/login">   <Login /></Route>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/checkout"><Checkout /> </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
