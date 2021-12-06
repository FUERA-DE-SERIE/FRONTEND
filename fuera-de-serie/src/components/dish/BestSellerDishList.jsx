import React from 'react'
import CardImage from '../Cards/CardImage'
import {mejoresVendidos} from '../../data/mejoresVendidos'

const BestSellerDishList = () => {
  
  return (
    <>
      {
        mejoresVendidos.map((dish) => {
          return (
            <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
          )
        })
      }
    </>
  )
}

export default BestSellerDishList
