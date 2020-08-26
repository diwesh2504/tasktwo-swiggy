import React from 'react';
import {connect} from 'react-redux';

import '../styles/itemview.css';
import { editQuantity } from '../actions/ItemActionCreator';
import { addToCart, loadCart, editCart } from '../actions/CartActionCreator';
const ItemView=(props)=>{
    React.useEffect(()=>{
        props.loadCart();
    },[])
    const handleAdd=(e)=>{
        let idx=+e.target.id;
        let q=+document.getElementById(`quant${idx}`).value;
        console.log("QUantity subtracted",q);
        let it=props.products.filter((item)=>{
            return item.id===idx;
        })
        console.log("ITEM",it);
        if (it[0].qty<q)
          alert(`Please select a lesser Quantity of the item ${it[0].name}`);
        else{
            let flag=0;
            props.editqty(idx,q);
            props.cart_items.map((item)=>{
                if(item.id===idx)
                    flag=1;
            })
            if(flag==1)
                props.editCart(idx,q)
            else
                props.add(it[0],q);
        }
    }

    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Action</th>
            </tr>
            {props.products.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty>0?`Available(${item.qty})`:"Unavailable"}</td>
                        <td><select id={`quant${item.id}`}>
                            <option defaultValue>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                            <button id={item.id} onClick={handleAdd} className="button-1">Add</button></td>
                    </tr>
                )
            })}
        </table>
        </>
    );
}
const mapStateToProps=(state)=>{
    return {
        items:state.items,
        cart_items:state.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        editqty:(id,qty)=>dispatch(editQuantity(id,qty)),
        add:(data,q)=>dispatch(addToCart(data,q)),
        loadCart:()=>dispatch(loadCart()),
        editCart:(id,qty)=>dispatch(editCart(id,qty))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemView);