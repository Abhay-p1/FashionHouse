import React from 'react';
import Card from './Card';
import CataData from './CataData';
const Catalogue = ()=>{
    return (<>
    <div className="my-5">
        <h1 className="text-center"> Our Catalogue </h1>
        <div className="container-fluid  mb-5">
            <div classname="row">
              <div className="col-lg-10 col-md-11 col-sm-8 col-11 mx-auto">
              <h2 className="mt-5 mb-5 text-center">  <span className="bg-info">Men's Wear And Shoes</span>  </h2>
                   <div className="row gy-5">
                     {
                         CataData.map((cur,inx)=>{
                            return <Card 
                            key = {inx}
                            imgsrc = {cur.imgsrc}
                            title = {cur.title}
                            desc={cur.desc}
                            />
                         })
                     }
                  </div>
              </div>
            </div>
            
        </div> 

    </div>

    </>);

}
export default Catalogue;
