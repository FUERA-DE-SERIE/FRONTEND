import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/authContext'
import CardImage from '../../Cards/CardImage'

const StorePage = () => {

  const { dishes } = useContext( AuthContext )

  return (
    <>
    <div className="section">

      <h1>Store Page</h1>
    </div>
    <div className="section">
      {
        dishes.map((dish) => {
          return (
            <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
          )
        })
      }
    </div>
    </>
  )
}

export default StorePage
