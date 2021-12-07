import { types } from "../types/types";

const initialState = {
  articulos : [],
  categorias : []
}

export const tiendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.tiendaGetArticulosCategorias:
      return {
        ...state,
        articulos: action.payload.articulos,
        categorias: action.payload.categorias
      }
    case types.tiendaGetUsuarios:
      return {
        ...state,
        usuarios: action.payload
      }
 
    default:
      return state;
  }
}
