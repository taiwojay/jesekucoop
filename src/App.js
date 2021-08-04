import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Products from './Products'
import ScrollToTop from './components/ScrollToTop'
import Register from './Register'

function App() {
  return (
    <div className="App">
    <ScrollToTop />
    <Navbar />
    <Switch className='body'>
    <Route path='/' exact component={HomePage}/>
      <Route path='/about-us' exact component={AboutUs} />
      <Route path='/products&services' exact component={Products} />
      <Route path='/register' exact component={Register} />
      </Switch>
    <Footer />
    </div>
  );
}

export default App;
