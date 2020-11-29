import useWindowSize from "../../hooks/useWindowSize"

const useCrosswordBoardStyle = (rows, columns) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  const widthIsTheLimit =
    windowWidth && windowWidth * rows < windowHeight * columns

  return {
    width: `calc(${
      widthIsTheLimit ? windowWidth : (windowHeight * columns) / rows
    }px - 2vmin)`,
    height: `calc(${
      widthIsTheLimit ? (windowWidth * rows) / columns : windowHeight
    }px - 2vmin`,
    gridTemplateRows: `repeat(${rows}, ${100 / rows}%)`,
    gridTemplateColumns: `repeat(${columns}, ${100 / columns}%)`,
  }
}

export default useCrosswordBoardStyle
