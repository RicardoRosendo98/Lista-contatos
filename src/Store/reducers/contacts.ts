import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Ricardo Rosendo',
      phone: +551199998888,
      email: 'ricardorosendo@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '00/00/0000',
      id: 1
    }
  ]
}

const contactSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexCotact = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexCotact >= 0) {
        state.itens[indexCotact] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contact>) => {
      const contantoExiste = state.itens.find(
        (contato) => contato.phone === action.payload.phone
      )

      if (contantoExiste) {
        alert('Já existe esse contato')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactSlice.actions

export default contactSlice.reducer
