import axios from 'axios';
import { types } from '../types/types';

export const getArticulosCategorias = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/dish/list")
      .then( ({ data }) => {
        // console.log(data)
        dispatch( articulosCategorias(data) )
      })
      .catch((err) => {
        console.log(err);
        return err;
    });
  }  
}

export const getusuarios = () => {
  return({
    
  })  
}

export const articulosCategorias = (articulos, categorias=[]) => {
  return({
    type: types.tiendaGetArticulosCategorias,
    payload: {
      articulos,
      categorias
    }
  })
}