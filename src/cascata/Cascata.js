import React from "react"

import { useSelector, useDispatch } from 'react-redux';
import {
  tap,
  // reset,
  selectCascata,
  selectIsSolution,
} from './cascataSlice';

const Cascata = () => {
  const state = useSelector(selectCascata)
  const isSolution = useSelector(selectIsSolution)
  const dispatch = useDispatch();

  const handleClick = index => e => dispatch(tap(index))

  return (
    <div className="crossword-board-container">
      <div className="crossword-board">
        <Inputs
          values={state.values}
          onClick={handleClick}
          selected={state.selected}
          isSolution={isSolution}
        />
      </div>
    </div>
  )
}

const Inputs = ({ values, isSolution, selected, onClick }) => {
  let inputs = []
  for (let i = 0; i < 14 * 14; i++) {
    const value = values[i]

    if (value === "^") {
      inputs.push(
        <span
          key={i}
          className="crossword-board__item crossword-board__item--blank"
        />
      )
    } else if (value === "_") {
      inputs.push(<span key={i} className="crossword-board__item" />)
    } else {
      inputs.push(
        <input
          key={i}
          className={`crossword-board__item ${
            i === selected || (isSolution && value !== ' ') ? "crossword-board__item--selected" : ""
          } ${
            14 * 6 <= i && i < 14 * 7
              ? "crossword-board__item--border-bottom"
              : ""
          }`}
          type="text"
          minLength="1"
          maxLength="1"
          value={value}
          onClick={value.match(/[a-z ]/i) ? onClick(i) : undefined}
          required
          readOnly
        />
      )
    }
  }

  return inputs
}

export default Cascata
