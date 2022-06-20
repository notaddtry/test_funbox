import React from 'react'
import MainLayout from './components/layout/MainLayout'
import ProductList from './components/Product/ProductList'

function App() {
  return (
    <MainLayout>
      <div className='container'>
        <ProductList />
      </div>
    </MainLayout>
  )
}

export default App
