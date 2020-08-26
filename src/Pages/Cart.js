import React from 'react';
import {connect} from 'react-redux';
import '../styles/cart.css'
import { loadCart, editCart,resetCart } from '../actions/CartActionCreator';
import { editQuantityFromCart } from '../actions/ItemActionCreator';
const Cart=(props)=>{
    const [s,setSum]=React.useState(0);
    React.useEffect(()=>{
        props.load()
        setSum(sum());
    },[props.cart_items])
    const sum=()=>{
       let s= props.cart_items.map((item)=>item.price*item.qtyCart).reduce((acc,curr)=>acc+curr,0);
       return s;
    }
    const handleClick=(e)=>{
        let checkflag=0;
        props.items.map((item)=>{
            if(item.id===+e.target.id && item.qty==0){
                alert(`Please Select a Lesser Amount for ${item.name}`)
                checkflag=1;
            }
        })
        if(checkflag!==1){
        if(e.target.innerText==="+")
            {
                props.edit(+e.target.id,+1);
                props.editMain(+e.target.id,+1)
            }
        else
            {
                props.edit(+e.target.id,-1);
                props.editMain(+e.target.id,-1);
            }
        }
    }
    const handleCheckout=(e)=>{
        alert(`Order Placed.Your Bill is ${s},Happy Swiggy-ing!!`);
        setSum(0);
        props.reset();
    }
    return (
        <>
        <h2>Your Cart</h2>
        <div className="cart-display-top" >
            <div>
                <table className="cart-table-main">
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {props.cart_items.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td><button id={item.id}onClick={handleClick}>-</button>&nbsp;{item.qtyCart}&nbsp;<button id={item.id} onClick={handleClick}>+</button></td>
                                <td>{item.price}</td>
                                <td>{item.qtyCart*item.price}</td>
                            </tr>
                        )
                    })}
                    <tfoot>
                        <tr style={{marginTop:"10px"}}>
                        <td>Total</td>
                        <td>Rs.{s}</td>
                        <td><button disabled={s===0 ? true:false} onClick={handleCheckout}>Checkout</button></td>
                        </tr>
                        
                    </tfoot>
                </table>
            </div>
            
        </div>
        </>
        

    )
}
const mapStateToProps=(state)=>{
    return {
    items:state.items,
    cart_items:state.cart
    }

}
const mapDispatchToProps=(dispatch)=>{
    return {
        load:()=>dispatch(loadCart()),
        edit:(id,qty)=>dispatch(editCart(id,qty)),
        editMain:(id,qty)=>dispatch(editQuantityFromCart(id,qty)),
        reset:()=>dispatch(resetCart())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);