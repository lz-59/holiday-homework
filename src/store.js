import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login, home, sample, table } from '@/reduces'

const rootPersistConfig = {
  key: 'auto',
  storage,
  stateReconciler:autoMergeLevel2,
  whitelist: ['login', 'home'],
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    sample,
    table,
    login,
    home,
  })
)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise,thunk))
)

export { store }