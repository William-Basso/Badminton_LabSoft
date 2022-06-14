import { createSlice } from "@reduxjs/toolkit";

export const jogadorSlice = createSlice({
  name: "jogador",
  initialState: {
    nome: ""
  },
  reducers: {
    updateJogador: (state, action) => {
      let nome = action.payload.nome;
      state.nome = nome;
    }
  }
})

export const { updateJogador } = jogadorSlice.actions;
export default jogadorSlice.reducer;

