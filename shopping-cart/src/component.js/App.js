import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import { connect} from 'react-redux';
import Cart from './Cart';
import "../index.css";

function App(props){

   
    return (
        <>
        <Header />
            <div className='relative'>
            { props.isOpen && (
                <Cart />
            )}
         </div>

        <div className='flex'>
            <Main />
            <Sidebar  />
        </div>
        </>
    )
}

function mapStateToProps(state){
    return {
        isOpen : state.isOpen,
    }
}

export default  connect(mapStateToProps) (App);