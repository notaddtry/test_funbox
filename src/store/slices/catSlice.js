import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cats: [
    {
      id: '1',
      img: '/assets/images/cat.png',
      text: 'фуа-гра',
      count: '10',
      bonus: 'мышь',
      available: true,
      weight: 0.5,
      selected: false,
      selectedInfo: 'Печень утки разварная с артишоками.',
    },
    {
      id: '2',
      img: '/assets/images/cat.png',
      text: 'рыбой',
      count: '40',
      bonus: '2 мыши',
      available: true,
      weight: 2,
      selected: false,
      selectedInfo: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: '3',
      img: '/assets/images/cat.png',
      text: 'курой',
      count: '100',
      bonus: '5 мышей',
      available: true,
      weight: 5,
      selected: false,
      comment: 'заказчик доволен',
      selectedInfo: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ],
}

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    selectItem(state, action) {
      const selectedCat = state.cats.find((cat) => cat.id === action.payload)
      if (selectedCat.available) selectedCat.selected = !selectedCat.selected
    },
  },
})

export const { selectItem } = catSlice.actions

export default catSlice.reducer
