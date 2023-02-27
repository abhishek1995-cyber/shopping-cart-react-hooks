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
            <i onClick={handleClose} className="text-white text-3xl fa-solid fa-x"></i>
        { props.cart &&  props.cart.map((cartItem,i) => {
            totalAmount += cartItem.price;
            return (
                <>
                <div className="text-white py-2 px-2 flex justify-between">
                    <figure>
                  <img className="w-20" src={"/static/products/" + cartItem.sku + "_1.jpg"} alt='product-img'/>
                    </figure>
                    <div>
                  <h2 className="main-title">{cartItem.title}</h2>
                  <p>{cartItem.currencyFormat + cartItem.price}</p>
                    </div>
                    <div> 
                        <i onClick={()=> handleDelete(i)} className="fa-solid fa-trash-can-arrow-up"></i>
                    </div>
                  </div>

                </>
            )
        })}
          <div className="text-white">
                    <h3>Total amount : {totalAmount} </h3>
                  </div>
                  <button className="text-white">Checkout</button>
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
