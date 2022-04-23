import { Outlet } from 'react-router-dom'

import './default-layout.css'

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Outlet />
    </div>
  )
}

export default DefaultLayout