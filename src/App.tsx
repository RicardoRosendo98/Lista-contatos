import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import store from './Store'
import Home from './Pages/Home'
import Register from './Pages/Res'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Res',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
