import React from 'react'
import CardImage from '../Cards/CardImage'

const BestSellerDishList = () => {

  const bestSellers = [
    {
      'id': 'Avena',
      'dish':'Pasta Bolognese', 
      'price':'$35,000', 
      'calories':'900 cal',
    },
    {
      'id': 'Avena',
      'dish':'Pasta Bolognese', 
      'price':'$35,000', 
      'calories':'900 cal',
    },
    {
      'id': 'Avena',
      'dish':'Pasta Bolognese', 
      'price':'$35,000', 
      'calories':'900 cal',
    },
    {
      'id': 'Avena',
      'dish':'Pasta Bolognese', 
      'price':'$35,000', 
      'calories':'900 cal',
    },
  ]

  return (
    <>
      {
        bestSellers.map((dish) => {
          return (
            <CardImage size='medium' key={ dish.id }  { ...dish }></CardImage>
          )
        })
      }
    </>
  )
}

export default BestSellerDishList
