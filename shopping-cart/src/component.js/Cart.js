import React, { useState} from "react";
import { connect} from 'react-redux';
import { deleteItem , closeCart} from '../store/action'


function Cart(props){
    let totalAmount = 0;

    const handleDelete = (i) => {
        props.dispatch(deleteItem(i))
    }
    const handleClose = () => {
        props.dispatch(closeCart(!props.isOpen))
    }
    return (
        <>
 
            <div className="absolute w-1/4 bg-black top-0.5 right-0.5">
            <i onClick={handleClose} className="flex justify-end  cursor-pointer  text-white text-3xl fa-solid fa-x"></i>
        { props.cart &&  props.cart.map((cartItem,i) => {
            totalAmount += cartItem.price;
            return (
                <>
                <div className="text-white py-2 px-2 flex justify-between">
                    <figure>
                  <img className="w-20" src={"/static/products/" + cartItem.sku + "_1.jpg"} alt='product-img'/>
                    </figure>
                    <div>
                  <h2 className="main-title mt-7">{cartItem.title}</h2>
                  <p>{cartItem.currencyFormat + cartItem.price}</p>
                  <p>{cartItem.style}</p>
                    </div>
                    <div> 
                        <i onClick={()=> handleDelete(i)} className="text-2xl mt-10 hover:bg-red-700 cursor-pointer fa-solid fa-trash-can-arrow-up"></i>
                    </div>
                  </div>

                </>
            )
        })}
          <div className="text-white text-center">
                    <h3 className="text-xl my-3">Total amount : $ <span className="text-red-400">{totalAmount} </span></h3>
                  </div>
                  <button className=" bg-gray-400 text-gray-200 ml-28 mb-5 py-2 px-8 rounded-full">Checkout</button>
        </div>
        </>
    )
}
function mapStateToProps(state){
    return {
        cart: state.cartProduct,
        isOpen: state.isOpen
    }
}

export default connect(mapStateToProps)(Cart);
