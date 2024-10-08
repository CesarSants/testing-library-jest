import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
// import carrinho from './reducers/carrinho'

import api from '../services/api'
// import { RootState } from '@reduxjs/toolkit/query'

// export const store = configureStore({
//   reducer: {
//     carrinho: carrinhoReducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configuraStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}
type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof configuraStore>

// export type RootReducer = ReturnType<typeof store.getState>
