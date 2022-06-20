import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'

import styles from './product.module.css'

const ProductList = () => {
  const products = useSelector((state) => state.cat.cats)

  useEffect(() => {
    console.log(products)
  }, [])

  return (
    <div className={styles.wrapper_list}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
