import React from 'react'
import { Button } from './Button'
import './ProductCard.css'

export const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className='card'>
        <img className='productImage' src={product.img} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <Button text='Mua ngay' type='danger'></Button>
    </div>
    
  )
}
