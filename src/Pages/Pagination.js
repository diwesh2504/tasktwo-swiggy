import React from 'react';
import '../styles/paginate.css'
const Pagination =(props)=>{
    let pageNumbers=[];
    for(let i=1;i<=Math.ceil(props.totalProducts/props.productsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
                {pageNumbers.map((item)=>{
                    return(
                        <a  onClick={()=>props.paginate(item)}>{item}</a>
                    )
                })}
            </div>
    )
}

export default Pagination;