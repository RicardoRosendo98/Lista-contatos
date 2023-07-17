import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contact'

type FilterState = {
  termo?: string
  criterio: 'online' | 'off-line' | 'todas' | 'ordem'
  valor?: enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'todas'
}

const filterSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFilter } = filterSlice.actions

export default filterSlice.reducer
