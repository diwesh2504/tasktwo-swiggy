import React from 'react';
import {connect} from 'react-redux';
import {loadItems} from '../actions/ItemActionCreator';
import '../styles/orderpage.css'
import ItemView from './ItemView';
import Pagination from './Pagination';
const OrderPage=(props)=>{
    const [currentPage,setCurrentPage]=React.useState(1);
    const [productsPerPage,setProductsPerPage]=React.useState(3);
    const [food,setFood]=React.useState([]);
    React.useEffect(()=>{
        props.loadItems();
        setFood(props.items);
    },[props.items]);
    //Logic
    const indexOfLastProduct=currentPage*productsPerPage;
    const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
    const currentProducts=food.slice(indexOfFirstProduct,indexOfLastProduct);
    const paginate=(page_number)=>setCurrentPage(page_number);
    const handleFilter=()=>{
        let choice=document.getElementById("filter").value;
        if (choice!=="All")
            setFood(props.items.filter((item)=>{
            return item.type===choice;
            }))
        else
            setFood(props.items);
    }
    return (
        <>
        <h2>Order your favourite food.!!</h2>
        <div className="contain">
            <div>
                <label htmlFor="filter">Filter By</label>
                <select id="filter" style={{marginLeft:"15px",marginRight:"15px"}}>
                    <option>..</option>
                    <option >veg</option>
                    <option>non-veg</option>
                    <option>All</option>
                    </select>
                <button onClick={handleFilter}>Go</button>
            </div>
            <div style={{marginTop:"20px"}}>
                <ItemView products={currentProducts} func={setFood}/>
            </div>
            <div style={{marginTop:"20px",textAlign:"center"}}>
            <Pagination productsPerPage={productsPerPage} totalProducts={food.length} paginate={paginate}/>
            </div>
        </div>
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
        items:state.items
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        loadItems:()=>dispatch(loadItems())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderPage);