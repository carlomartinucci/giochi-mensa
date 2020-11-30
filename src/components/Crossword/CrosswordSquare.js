import React from "react"
import "./crossword-square.css"

const CrosswordSquare = ({
  onChange,
  isShaded,
  hasBorderBottom,
  isSelected,
  value,
  onClick,
}) => {
  if (onChange) {
    return (
      <input
        className="crossword-square"
        type="text"
        minLength="1"
        maxLength="1"
        value={value}
        onChange={onChange}
        onFocus={e => e.target.select()}
      />
    )
  } else if (isShaded) {
    return <span className="crossword-square crossword-square--shaded" />
  } else if (!onClick) {
    return <span className="crossword-square">{value}</span>
  } else {
    const className = `crossword-square ${
      isSelected ? "crossword-square--selected" : ""
    } ${hasBorderBottom ? "crossword-square--border-bottom" : ""}`

    return (
      <input
        className={className}
        type="text"
        minLength="1"
        maxLength="1"
        value={value}
        onClick={onClick}
        required
        readOnly
      />
    )
  }
}

export default CrosswordSquare
