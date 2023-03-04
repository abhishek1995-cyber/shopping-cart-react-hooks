export function ascending(){
    return {
        type: 'ASCENDING'
    }
}
export function descending(){
    return {
        type: 'DESCENDING'
    }
}
export function filterSize(data){
    return {
        type: 'FILTER_SIZE',
        payload: data
    }
}
export function openCart(data){
    return {
        type: 'OPEN_CART',
        payload: data
    }
}
export function closeCart(data){
    return {
        type: 'CLOSE_CART',
        payload: data
    }
}
export function addtoCart(data){
    return {
        type: 'ADDTO_CART',
        payload: data
    }
}
export function deleteItem(data){
    return {
        type: 'DELETE_ITEM',
        payload: data
    }
}
// export function selectSize(data){
//     return {
//         type: 'SELECT_SIZE',
//         payload: data
//     }
// }