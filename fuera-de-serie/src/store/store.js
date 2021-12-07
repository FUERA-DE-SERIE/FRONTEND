import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authreducer } from '../reducers/authReducer';
import { tiendaReducer } from '../reducers/tiendaReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
  auth: authreducer,
  ui: uiReducer,
  tienda: tiendaReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
