import React from 'react'
import Header from './Header'

const MainLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
