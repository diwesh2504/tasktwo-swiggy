export const loadCart=()=>{
    return {type:"LOAD_CART"};
}
export const addToCart=(data,n)=>{
    let d={...data,qtyCart:+n}
    return {type:"ADD_TO_CART",payload:d}
}

export const editCart=(id,qty)=>{
    return {type:"EDIT_CART",id,qty}
}

export const resetCart=()=>{
    return {type:"RESET_CART"};
}