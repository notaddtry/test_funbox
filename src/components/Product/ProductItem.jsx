import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectItem } from '../../store/slices/catSlice'
import styles from './product.module.css'

const catStyles = {
  standartColor: '#1698D9',
  hoverColor: '#2EA8E6',
  selectedColor: '#D91667',
  selectedHoverColor: '#E52E7A',
  disabledColor: '',
}

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
    if (selected) {
      setColorClassNames((prev) => [...prev, styles.selected])
    } else {
      setColorClassNames((prev) =>
        prev.filter((colors) => colors !== styles.selected)
      )
    }
  }, [selected])

  return (
    <div className={styles.wrapper_item}>
      <div
        ref={wrapperRef}
        className={`${styles.wrapper_content} ${colorClassNames.join(' ')}`}
        onMouseOut={(e) => removeClass(e)}
        onClick={(e) => handleBuy(e)}>
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
            <div className={styles.disabled}></div>
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
