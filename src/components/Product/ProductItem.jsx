import React, { useEffect, useRef, useState } from 'react'
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
  const [colorClassNames, setColorClassNames] = useState([])
  const wrapperRef = useRef(null)
  const labelRef = useRef(null)

  const handleBuy = (e) => {
    e.preventDefault()
    setColorClassNames((prev) => Array.from(new Set([...prev, styles.block])))

    dispatch(selectItem(id))
  }

  const removeClass = () => {
    wrapperRef.current.classList.remove(styles.block)
    labelRef.current.classList.remove(styles.block)
  }

  useEffect(() => {
    if (!available) {
      setColorClassNames((prev) => [
        ...prev,
        styles.disabled_background,
        styles.disabled_text,
      ])
      return
    }
    if (selected) {
      setColorClassNames((prev) => [...prev, styles.selected])
    } else {
      setColorClassNames((prev) =>
        prev.filter((colors) => colors !== styles.selected)
      )
    }
  }, [selected, available])

  return (
    <div
      className={styles.wrapper_item}
      style={{ pointerEvents: available ? 'all' : 'none' }}>
      <div
        ref={wrapperRef}
        className={`${styles.wrapper_content} ${colorClassNames.join(' ')}`}
        onMouseOut={(e) => removeClass(e)}
        onClick={(e) => handleBuy(e)}>
        <div className={styles.item_content}>
          <span
            className={`${styles.secondary_text} ${styles.pretitle} ${
              !available && styles.disabled_text
            }`}>
            Сказочное заморское яство
          </span>
          <h1>Нямушка</h1>
          <h2>с {text}</h2>
          <span
            className={`${styles.secondary_text} ${
              !available && styles.disabled_text
            }`}>
            {count} порций
          </span>
          <span
            className={`${styles.secondary_text} ${
              !available && styles.disabled_text
            }`}>
            {bonus} в подарок
          </span>
          <div className={styles.img_wrapper}>
            <img src={img} alt='cat' className={styles.img} />
            {!available && <div className={styles.disabled}></div>}
          </div>

          <div
            ref={labelRef}
            className={`${styles.label} ${colorClassNames.join(' ')}`}>
            <span className={styles.label_weight}>{weight}</span>
            <span>кг</span>
          </div>
        </div>
      </div>
      <div className={styles.text_buy}>
        {selected ? (
          <span>{selectedInfo}</span>
        ) : available ? (
          <span>
            Чего сидишь? Порадуй котэ,
            <span className={styles.buy} onClick={(e) => handleBuy(e)}>
              купи.
            </span>
          </span>
        ) : (
          <>
            <span className={styles.text_gold}>
              Печалька, c {text} закончился.
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductItem
