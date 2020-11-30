import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {
  tap,
  setState,
  loadLocalValues,
  unload,
  selectIsSolution,
  selectRows,
  selectColumns,
} from "./cascataSlice"

import CrosswordBoard from "../../components/Crossword/CrosswordBoard"
import CrosswordSquare from "../../components/Crossword/CrosswordSquare"

const Cascata = ({ cascata }) => {
  const { id } = cascata
  const values = useSelector(state => state.cascata.values)
  const description = cascata.description
  const rows = cascata.height
  const columns = cascata.width
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setState(cascata))
    dispatch(loadLocalValues(id, cascata.values))
    return () => {
      dispatch(unload())
    }
  }, [dispatch, id, cascata])

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
