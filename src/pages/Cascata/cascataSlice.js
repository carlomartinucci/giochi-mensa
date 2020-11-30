import { createSlice } from "@reduxjs/toolkit"
import localforage from "localforage"

const initialValues = [
  "______________",
  "______________",
  "______________",
  "______________",
  "______________",
  "______________",
  "______________",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
  "^^^^^^^^^^^^^^",
].join("")

const initialState = {
  width: 14,
  height: 14,
  values: initialValues,
  selected: null,
}

const sameColumn = (width, i1, i2) => i1 % width === i2 % width
const swap = (values, i1, i2) => {
  const [first, last] = i1 < i2 ? [i1, i2] : [i2, i1]
  return (
    values.substr(0, first) +
    values[last] +
    values.substring(first + 1, last) +
    values[first] +
    values.substr(last + 1)
  )
}

export const cascataSlice = createSlice({
  name: "cascata",
  initialState: initialState,
  reducers: {
    unload: (state, action) => {
      Object.keys(initialState).forEach(key => {
        state[key] = initialState[key]
      })
    },
    setState: (state, action) => {
      state.width = action.payload.width
      state.height = action.payload.height
      state.values = action.payload.values
      while (
        state.values.length <
        action.payload.width * action.payload.height
      ) {
        state.values += " "
      }
      state.selected = null
    },
    setValues: (state, action) => {
      state.values = action.payload
      state.selected = null
    },
    tap: (state, { payload }) => {
      if (state.selected == null) {
        state.selected = payload.selected
      } else if (payload.selected === state.selected) {
        state.selected = null
      } else if (sameColumn(state.width, state.selected, payload.selected)) {
        state.values = swap(state.values, state.selected, payload.selected)
        localforage.setItem(`cascata-${payload.id}`, state.values)
        state.selected = null
      } else {
        state.selected = payload.selected
      }
    },
  },
})

export const { unload, tap, setState, setValues } = cascataSlice.actions

export const loadLocalValues = (id, serverValues) => dispatch => {
  localforage.getItem(`cascata-${id}`).then(values => {
    if (values) {
      console.log("loaded from localforage", id, values)
      dispatch(setValues(values))
    } else {
      console.log("NOT loaded from localforage", id)
    }
  })
}

export const selectCascata = state => state.cascata
export const selectIsSolution = state => false
export const selectRows = state => state.cascata.height
export const selectColumns = state => state.cascata.width

export default cascataSlice.reducer
