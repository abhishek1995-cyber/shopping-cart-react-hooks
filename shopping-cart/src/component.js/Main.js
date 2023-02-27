import React from "react";
import { connect } from "react-redux";
import { addtoCart } from '../store/action'

function Main(props) {

    const handleClick = (product) => {
       
        props.dispatch(addtoCart(product))
    }

  return (
    <>
    <div className="w-3/4 grid  grid-cols-3 ">
      {props.display.map((product, i) => {
        return (
          <div className="text-center relative leading-9 mb-12">
            <img  src={"/static/products/" + product.sku + "_1.jpg"}     alt='product-img'/>
            <span className="absolute top-7 right-5" >
            <span  className={product.isFreeShipping ? "text-green-400" : "text-red-400"}>
              {product.isFreeShipping ? "Free -shipping" : "Paid-shipping"}
            </span>
            </span>
            <h2 className="main-title">{product.title}</h2>
            <hr className="w-1/4 ml-32 " />
            <p>{product.currencyFormat + product.price}</p>
            <button className=" bg-gray-400 text-gray-200 py-1 px-2 rounded-full" onClick={()=>handleClick(product)} id={product.id}>Add to Cart</button>
          </div>
        );
      })}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    display: state.dataToDisplay,
  };
}

export default connect(mapStateToProps)(Main);
