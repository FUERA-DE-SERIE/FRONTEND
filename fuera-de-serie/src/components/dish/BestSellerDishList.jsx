import React, { useMemo } from 'react'
import { GetBestSellers } from '../../selectors/getBestSellers'
// import { AuthContext } from '../../auth/authContext'
import CardImage from '../Cards/CardImage'



const BestSellerDishList = () => {

  // const { dishes } = useContext( AuthContext )
  const dishes = useMemo(() => GetBestSellers(), []);
  
  return (
    <>
      {
        dishes.map((dish) => {
          return (
            <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
          )
        })
      }
    </>
  )
}

export default BestSellerDishList
