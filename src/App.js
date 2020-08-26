import React from 'react';
import './styles/app.css';
import OrderPage from './Pages/OrderPage';
import Cart from './Pages/Cart';

const App=()=> {
  const [view,setView]=React.useState("order");
  return (
    <>
    <div className="top">
        <h2>Welcome to Swiggy</h2>
    </div>
    <div className="middle">
      <div className="nav">
        <div style={{height:"200px"}}><button className="button" style={{marginTop:"100px"}} onClick={()=>setView("order")}>Order</button></div>
        <div style={{height:"200px"}}><button className="button" style={{marginTop:"100px"}} onClick={()=>setView("cart")}>Cart</button></div>
      </div>
      <div>
        {view==="order" ?<OrderPage/>:""}
        {view==="cart" ? <Cart/>:""}
      </div>
    </div>
    </>
  )
}

export default App;
