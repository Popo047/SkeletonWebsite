// import logo from './logo.svg';
import './App.css';
import react from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import Signup from './components/Pages/Signup'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
