import React from 'react';
import web1 from "../src/images/clothes.jpg";
import Common from './Common';
const Home = ()=>{
return (<>
  <Common
  heading="Shop Now From"
  btnname="Shop Now"
  imgsrc={web1}
  visit="/catalogue"
  />
</>);
}
export default Home;