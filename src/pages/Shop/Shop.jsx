import React from 'react'
import Product from './product'
import { PRODUCTS } from '../../products'

const shop = () => {
  return (
    <div className='shop'>
        <div className='shoptitle'>
            <h1>Apni Dukaan</h1>
        </div>
        <div>
        {PRODUCTS.map((product)=>(
            <Product data={product}/>
        ))}
        </div>
    </div>
  )
}

export default shop