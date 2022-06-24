import React from 'react'
import { useSelector } from 'react-redux'

import ProductItem from './ProductItem'

import styles from './product.module.css'

const ProductList = () => {
  const products = useSelector((state) => state.cat.cats)

  return (
    <div className={styles.wrapper_list}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
