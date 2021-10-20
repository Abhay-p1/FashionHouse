import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Catalogue from './Catalogue';
import {Switch,Route,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const App = ()=>{
return (<>
  <Navbar/>
  <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/catalogue" component={Catalogue}></Route>
        <Route exact path="/aboutUs" component={Aboutus}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/"></Redirect>
    </Switch>
    <div className="mb-5"></div>
    <Footer/>
</>);
}
export default App;