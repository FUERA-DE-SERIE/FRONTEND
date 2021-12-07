import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticulosCategorias } from '../../../actions/tienda';
import CardImage from '../../Cards/CardImage'
import './storePage.css'

const StorePage = () => {

    const dispatch = useDispatch()
    const { articulos } = useSelector(state => state.tienda)

    useEffect(() => {
      dispatch( getArticulosCategorias() )
    }, [dispatch])

  return (
    <div className="section-store">
      <div className="section section-store">

        <h1 className="fontPlayfair">Tienda</h1>
      </div>
      <div className="section">
        {
          articulos.map((dish) => {
            return (
              <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
            )
          })
        }
      </div>
      <div className="section">
        {
          articulos.map((dish) => {
            return (
              <CardImage size='medium' key={ dish._id }  { ...dish }></CardImage>
            )
          })
        }
      </div>
      <div className="section">
        {
          articulos.map((dish) => {
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
