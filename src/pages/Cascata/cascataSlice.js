import { createSlice } from "@reduxjs/toolkit"
import localforage from "localforage"

import { state as serverState } from "./server.js"

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
  description: "Cascata di lettere",
  width: 14,
  height: 14,
  values: initialValues,
  selected: null,
}

const sameColumn = (state, i1, i2) => i1 % state.width === i2 % state.width
const swap = (state, i1, i2) => {
  const [first, last] = i1 < i2 ? [i1, i2] : [i2, i1]
  return (
    state.values.substr(0, first) +
    state.values[last] +
    state.values.substring(first + 1, last) +
    state.values[first] +
    state.values.substr(last + 1)
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
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key]
      })
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
      } else if (sameColumn(state, state.selected, payload.selected)) {
        state.values = swap(state, state.selected, payload.selected)
        const { selected, ...stateToSave } = state
        localforage.setItem(`cascata-${payload.id}`, stateToSave)
        state.selected = null
      } else {
        state.selected = payload.selected
      }
    },
  },
})

export const { unload, tap, setValues } = cascataSlice.actions

const { setState } = cascataSlice.actions

export const load = id => dispatch => {
  console.log("loading from localforage", id)
  localforage
    .getItem(`cascata-${id}`)
    .then(state => {
      if (state) {
        console.log("loaded from localforage", id, state)
        dispatch(setState(state))
      } else {
        console.error("NOT loaded from localforage", id)
        throw new Error(`key "cascata-${id}" not found in localforage`)
      }
    })
    .catch(error => {
      console.error("ERROR NOT loaded from localforage", id, error)
      setTimeout(() => {
        if (serverState[id]) {
          console.log("loaded from server", id, serverState[id])
          dispatch(setState(serverState[id]))
          return true
        } else {
          console.error("NOT loaded from server", id)
          return false
        }
      }, 1000)
    })
}

export const selectCascata = state => state.cascata
export const selectIsSolution = state => false
export const selectRows = state => state.cascata.height
export const selectColumns = state => state.cascata.width

export default cascataSlice.reducer
