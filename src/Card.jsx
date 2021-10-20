import React from 'react';
import {NavLink} from 'react-router-dom';
const Card = (props) =>{
    return (
        <>
          <div className="col-md-4  col-10 mx-auto gx-5 card_div">
              <div className="card">
                  <img className="card-img-top" src={props.imgsrc} alt="Cardcap"/>
                  <div className="card-body">
                  <h4 className="card-title">{props.title}</h4>
                  <p className="card-text">{props.desc}</p>
                  <div classname="mx-auto">
                  <span class="dropdown ms-2 my-2">
                  <button className="btn btn-dark dropdown-toggle dtsize" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Select Size
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink to="#" className="dropdown-item mid">M</NavLink></li>
    <li><NavLink to="#" className="dropdown-item lid">L</NavLink></li>
    <li><NavLink to="#" className="dropdown-item xlid">XL</NavLink></li>
    <li><NavLink to="#" className="dropdown-item xxlid">XXL</NavLink></li>
  </ul>
</span>
<NavLink to="#" className="btn btn-primary abcd ms-2  mb-2 mt-2">Add To Cart</NavLink>
<span className="dropdown my-2 ms-2">
  <button className="btn btn-dark dropdown-toggle dtcolor" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Select Colour
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink to="#" className="dropdown-item black">Black</NavLink></li>
    <li><NavLink to="#" className="dropdown-item blue">Blue</NavLink></li>
    <li><NavLink to="#" className="dropdown-item green">Green</NavLink></li>
    <li><NavLink to="#" className="dropdown-item brown">Brown</NavLink></li>
  </ul>
</span>
<NavLink to="#" className="btn btn-success abcd2 ms-2 my-2">Buy Now</NavLink>
</div>
                  </div>
              </div>
           </div>
        </>
    );
}
export default Card;