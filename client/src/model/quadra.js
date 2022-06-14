import { createSlice } from "@reduxjs/toolkit";

export const quadraSlice = createSlice({
  name: "quadra",
  initialState: {
    area: new Array(6).fill().map(() => ({
      saque: 0,
      forehand: 0,
      backhand: 0,
      clear: 0,
      drop: 0,
      smash: 0,
      drive: 0,
      lob: 0,
      netShot: 0,
      netKill: 0,
      netLift: 0,
      ponto: 0
    })),
    fora: {
      saque: 0,
      forehand: 0,
      backhand: 0,
      clear: 0,
      drop: 0,
      smash: 0,
      drive: 0,
      lob: 0,
      netShot: 0,
      netKill: 0,
      netLift: 0,
      contador: 0
    },
    totalPontos: 0,
  },
  reducers: {
    updateParameters: (state, action) => {
      let area = action.payload.area;
      let tipo = action.payload.tipo;
      state.area[area][tipo]++;
      state.area[area].ponto++;
      state.totalPontos++;
    },
    countFora: (state, action) => {
      let tipo = action.payload.tipo;
      state.fora[tipo]++;
      state.fora.contador++;
    },
    salvar: (state) => {
      state.save = state
    },
    reset: (state) => {
      for (let index = 0; index < state.area.length; index++) {
        state.area[index].saque = 0;
        state.area[index].forehand = 0;
        state.area[index].backhand = 0;
        state.area[index].clear = 0;
        state.area[index].drop = 0;
        state.area[index].smash = 0;
        state.area[index].drive = 0;
        state.area[index].lob = 0;
        state.area[index].netShot = 0;
        state.area[index].netKill = 0;
        state.area[index].netLift = 0;
        state.area[index].ponto = 0;
      }
      state.fora.contador = 0;
      state.fora.saque = 0;
      state.fora.forehand = 0
      state.fora.backhand = 0
      state.fora.clear = 0;
      state.fora.drop = 0;
      state.fora.smash = 0;
      state.fora.drive = 0;
      state.fora.lob = 0;
      state.fora.netShot = 0;
      state.fora.netKill = 0;
      state.fora.netLift = 0;
      state.fora.ponto = 0;
      state.totalPontos = 0;
    }
  }
})

export const { updateParameters, countFora, reset, salvar } = quadraSlice.actions;
export default quadraSlice.reducer;
