import React from "react";
import { connect } from 'react-redux';
import {filterSize} from '../store/action';

function Sidebar(props){
    let uniqueSizes = [...new Set(props.display.map(e => e.availableSizes).flat())];

    function handleSize(size){
        props.dispatch(filterSize(size))
    }
    
    return (
        <>
        <div className="w-1/4 text-center py-16 px-5 ">
            <h2 className="text-2xl mb-6">Filter by Sizes </h2>
        {
           uniqueSizes.map(size => {
             
             return (
                <button className="bg-yellow-300 w-16 h-16 rounded-full mx-3 my-3" onClick={()=> handleSize(size)}>{size}</button>
             )
           })
        }
        </div>
        </>
    )
}
function mapStateToProps(state) {
    return {
      display: state.data,
    };
  }
export default connect(mapStateToProps) (Sidebar);