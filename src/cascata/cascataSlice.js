import { createSlice } from '@reduxjs/toolkit';

const initialValues = [
  "__c_aa________",
  "_ve_ae__a__aaa",
  "_aecch_eiaaeia",
  "adeiei_llecgrl",
  "aonnhieqneeltr",
  "npnrnsotrnhltr",
  "osorttsuusltuu",
  "   ^      ^   ",
  "^      ^  ^   ",
  "^     ^  ^  ^ ",
  "       :^  ^  ",
  "      ^  '    ",
  " ^ ^  ^       ",
  "^     ^      .",
].join("")

const solution = [
  "__ _  ________",
  "_  _  __ __   ",
  "_     _       ",
  "      _       ",
  "              ",
  "              ",
  "              ",
  "non^essere^giu",
  "^perche^la^tua",
  "^donna^ti^ha^l",
  "asciato:^ne^tr",
  "overai^un'altr",
  "a^e^ti^lascera",
  "^anche^quella.",
].join("")

const initialState = { values: initialValues, selected: null }

const loadState = (key) => {
  const loadValues = () => {
    try {
      return localStorage.getItem(key)
    } catch (err) {
      return undefined
    }
  }

  let loadedState
  const loadedValues = loadValues()
  if (loadedValues) {
    loadedState = { values: loadedValues, selected: null }
  }

  return loadedState
}


const canSwap = (values, i1, i2) => i1 % 14 === i2 % 14
function swap(values, i1, i2) {
  const first = i1 < i2 ? i1 : i2
  const last = i1 < i2 ? i2 : i1
  return (
    values.substr(0, first) +
    values[last] +
    values.substring(first + 1, last) +
    values[first] +
    values.substr(last + 1)
  )
}

export const cascataSlice = createSlice({
  name: 'cascata',
  initialState: loadState('cascata-test') || initialState,
  reducers: {
    tap: (state, action) => {
      if (state.selected == null) {
        state.selected = action.payload
      } else if (action.payload === state.selected) {
        state.selected = null
      } else if (canSwap(state.values, state.selected, action.payload)) {
        state.values = swap(state.values, state.selected, action.payload)
        localStorage.setItem('cascata-test', state.values)
        state.selected = null
      } else {
        state.selected = action.payload
      }
    },

  },
});

export const { tap } = cascataSlice.actions;

export const selectCascata = state => state.cascata
export const selectIsSolution = state => state.cascata.values === solution

export default cascataSlice.reducer;
