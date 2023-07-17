import { configureStore } from '@reduxjs/toolkit'

import contacts from './reducers/contacts'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contacts,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
