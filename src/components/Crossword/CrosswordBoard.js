import React from "react"
import "./crossword-board.css"

import useCrosswordBoardStyle from "./useCrosswordBoardStyle"

const CrosswordBoard = props => {
  const crosswordBoardStyle = useCrosswordBoardStyle(props.rows, props.columns)

  return (
    <div className="crossword-board-container">
      <div className="crossword-board" style={crosswordBoardStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default CrosswordBoard
