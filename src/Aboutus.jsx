import React from 'react';
import web2 from "../src/images/aboutimg.jpg";
import Common from './Common';
const Aboutus = ()=>{
    return (<>
       <Common
         heading="Welcome To About Page Of"
        btnname="Contact Now"
        imgsrc={web2}
        visit="contact"
        />
    </>);

}
export default Aboutus;
