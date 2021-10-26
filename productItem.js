import React from 'react'
import App from './App'
import products from './products'

export const productItem = ({product, onDelete}) => {
    return (
        <>
        <div>
           <h4>{products.title}</h4>
           <p>{products.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(products)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}

export default productItem;;