import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {
  tap,
  load,
  unload,
  selectIsSolution,
  selectRows,
  selectColumns,
} from "./cascataSlice"

import CrosswordBoard from "../../components/Crossword/CrosswordBoard"
import CrosswordSquare from "../../components/Crossword/CrosswordSquare"

const Cascata = ({ id }) => {
  const values = useSelector(state => state.cascata.values)
  const description = useSelector(state => state.cascata.description)
  const rows = useSelector(selectRows)
  const columns = useSelector(selectColumns)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(load(id))
    return () => {
      dispatch(unload())
    }
  }, [dispatch, id])

  return (
    <React.Fragment>
      <p>{description}</p>
      <CrosswordBoard rows={rows} columns={columns}>
        {values.split("").map((value, index) => (
          <CascataSquare
            key={index}
            value={value}
            index={index}
            onClick={e => dispatch(tap({ id, selected: index }))}
          />
        ))}
      </CrosswordBoard>
    </React.Fragment>
  )
}

const CascataSquare = ({ value, index, onClick }) => {
  const rows = useSelector(selectRows)
  const columns = useSelector(selectColumns)
  const isSolution = useSelector(selectIsSolution)
  const selectedIndex = useSelector(state => state.cascata.selected)

  switch (value) {
    case "^":
      return <CrosswordSquare isShaded />
    case "_":
      return <CrosswordSquare />
    default:
      return (
        <CrosswordSquare
          hasBorderBottom={
            columns * (rows / 2 - 1) <= index && index < columns * (rows / 2)
          }
          isSelected={index === selectedIndex || (isSolution && value !== " ")}
          onClick={value.match(/[a-z àèéìòù]/i) ? onClick : undefined}
          value={value}
        />
      )
  }
}

export default Cascata
