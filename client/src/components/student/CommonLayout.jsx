

import React from 'react'
import { Outlet } from 'react-router-dom'

function CommonLayout() {
  return (
    <div>
      Common Content
      <Outlet/>
    </div>
  )
}

export default CommonLayout
