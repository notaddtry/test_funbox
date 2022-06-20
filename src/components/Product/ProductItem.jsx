import React from 'react'
import { useDispatch } from 'react-redux'
import { selectItem } from '../../store/slices/catSlice'
import styles from './product.module.css'

const ProductItem = ({
  id,
  img,
  text,
  count,
  bonus,
  available,
  weight,
  selected,
  selectedInfo,
}) => {
  const dispatch = useDispatch()

  const handleBuy = (e) => {
    e.preventDefault()
    dispatch(selectItem(id))
  }

  return (
    <div className={styles.wrapper_item}>
      <div
        className={styles.wrapper_content}
        onClick={(e) => handleBuy(e)}
        style={{ background: selected ? '#D91667' : '#2EA8E6' }}>
        <div className={styles.item_content}>
          <span className={`${styles.secondary_text} ${styles.pretitle}`}>
            Сказочное заморское яство
          </span>
          <h1>Нямушка</h1>
          <h2>с {text}</h2>
          <span className={styles.secondary_text}>{count} порций</span>
          <span className={styles.secondary_text}>{bonus} в подарок</span>
          <img src={img} alt='cat' className={styles.img} />
          <div
            style={{ background: selected ? '#D91667' : '#2EA8E6' }}
            className={styles.label}>
            <span className={styles.label_weight}>{weight}</span>
            <span>кг</span>
          </div>
        </div>
      </div>
      <div className={styles.text_buy}>
        {selected ? (
          <span>{selectedInfo}</span>
        ) : (
          <span>
            Чего сидишь? Порадуй котэ,
            <span className={styles.buy} onClick={(e) => handleBuy(e)}>
              купи.
            </span>
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductItem
