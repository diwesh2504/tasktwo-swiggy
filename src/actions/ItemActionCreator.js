export const loadItems=()=>{
    return {type:"LOAD_ITEMS"};
}
export const editQuantity=(id,qty)=>{
    return {type:"EDIT_QUANTITY",id,qty}
}

export const editQuantityFromCart=(id,qty)=>{
    return {type:"EDIT_FROM_CART",id,qty}
}