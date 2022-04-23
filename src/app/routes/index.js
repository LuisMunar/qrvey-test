import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'

import Home from '../pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <DefaultLayout /> }>
          <Route path="" element={ <Home /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes