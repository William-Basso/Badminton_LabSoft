import { configureStore } from '@reduxjs/toolkit'
import quadraReducer from './quadra'
import jogadorReducer from './jogador'

export default configureStore({
  reducer: {
    quadra: quadraReducer,
    jogador: jogadorReducer,
  }
})
