import React from "react";
import { connect } from 'react-redux';
import {ascending, descending, openCart } from '../store/action';
import '../index.css';


function Header(props){

   function handleSort(event){
      const { value } = event.target;
      if(value === 'ASCENDING'){
          props.dispatch(ascending())
      } else if (value === 'DESCENDING'){
        props.dispatch(descending())
      }
   }

   function handleCart(event){
    props.dispatch(openCart(!props.isOpen))
   }

    return (
        <>
        <header className="flex justify-between bg-blue-400 py-9 px-9">
        <select className="text-gray-600" onChange={handleSort}>
            <option  selected>Price Range</option>
            <option value='DESCENDING' >highest to lowest</option>
            <option value='ASCENDING'>lowest to highest</option>
        </select>
        <h1 className="text-3xl">
            Shopping Cart
        </h1>
        <figure>
        <i  onClick={handleCart} className=" text-3xl text-gray-600 fa-solid fa-cart-shopping"></i>
        </figure>
        </header>
        </>
    )
}
function mapStateToProps(state){
    return {
        isOpen: state.isOpen,
    }
}

export default connect(mapStateToProps)(Header)