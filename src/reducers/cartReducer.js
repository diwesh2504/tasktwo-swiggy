export const cartReducer=(state=[],action)=>{
    switch(action.type){
        case "LOAD_CART":
            return state;
        case "ADD_TO_CART":
            return state.concat(action.payload);
        case "EDIT_CART":
            return state.map((item)=>{
                if(item.id===action.id){
                    item.qtyCart+=action.qty;
                    item.qty-=action.qty;
                    return {...item}
                }else{
                    return {...item}
                }
            })
        case "DELETE_FROM_CART":
            return state.filter((item)=>{
                return item.id!==action.payload.id;
            });
        case "RESET_CART":
            return [];
        default:
            return state;
    }
}