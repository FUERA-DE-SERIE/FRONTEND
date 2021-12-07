import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/authContext'
import CardImage from '../../Cards/CardImage'
import './storePage.css'

const StorePage = () => {

  const { dishes } = useContext( AuthContext )

  return (
    <div className="section-store">
      <div className="section section-store">

        <h1 className="fontPlayfair">Store Page</h1>
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
      <div className="section">
        {
          dishes.map((dish) => {
            return (
              <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
            )
          })
        }
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
    </div>
  )
}

export default StorePage
