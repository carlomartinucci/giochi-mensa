import { useState } from "react"
import { useNavigate } from "@reach/router"

import CrosswordBoard from "../components/Crossword/CrosswordBoard"
import CrosswordSquare from "../components/Crossword/CrosswordSquare"

import { useCollection } from "@nandorojo/swr-firestore"

const newCascata = {
  description: "",
  width: 4,
  height: 4,
  values: "                ",
  solution: "                ",
}

const CascataNew = () => {
  const { add } = useCollection("cascata")
  const navigate = useNavigate()
  const [description, setDescription] = useState(newCascata.description)
  const [width, setWidth] = useState(newCascata.width)
  const [height, setHeight] = useState(newCascata.height)
  const [values, setValues] = useState(newCascata.values)
  const [solution, setSolution] = useState(newCascata.solution)

  const resize = (set, newLength) => {
    set(values => {
      if (values.length >= newLength) return values.substring(0, newLength)
      let padding = ""
      while (values.length + padding.length < newLength) {
        padding += " "
      }
      return values + padding
    })
  }

  const handleChangeWidth = e => {
    const newWidth = e.target.value
    resize(setValues, newWidth * height)
    resize(setSolution, newWidth * height)
    setWidth(newWidth)
  }

  const handleChangeHeight = e => {
    const newHeight = e.target.value
    resize(setValues, width * newHeight)
    resize(setSolution, width * newHeight)
    setHeight(newHeight)
  }

  const handleChangeValuesSquare = index => e => {
    if (e.target.value === "") {
      return
    }

    setValues(
      values =>
        `${values.substring(0, index)}${e.target.value}${values.substring(
          index + 1
        )}`
    )
  }

  const handleChangeSolutionSquare = index => e => {
    if (e.target.value === "") {
      return
    }

    setSolution(
      values =>
        `${values.substring(0, index)}${e.target.value}${values.substring(
          index + 1
        )}`
    )
  }

  const handleCreate = e => {
    add({
      description,
      width,
      height,
      values,
      solution,
    })
      .then(result => {
        console.log(result)
        navigate("/cascata")
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <label htmlFor="description">Descrivi lo schema</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <br />

      <label htmlFor="width">Quante Colonne?</label>
      <input
        id="width"
        type="number"
        min="4"
        value={width}
        onChange={handleChangeWidth}
      />
      <br />

      <label htmlFor="height">Quante Righe?</label>
      <input
        id="height"
        type="number"
        min="4"
        value={height}
        onChange={handleChangeHeight}
      />
      <br />

      <label htmlFor="values">Com'è lo schema all'inizio?</label>
      <CrosswordBoard rows={height} columns={width}>
        {values.split("").map((value, index) => (
          <CrosswordSquare
            key={index}
            value={value}
            onChange={handleChangeValuesSquare(index)}
            index={index}
          />
        ))}
      </CrosswordBoard>

      <label htmlFor="solution">Com'è lo schema risolto?</label>
      <CrosswordBoard rows={height} columns={width}>
        {solution.split("").map((value, index) => (
          <CrosswordSquare
            key={index}
            value={value}
            onChange={handleChangeSolutionSquare(index)}
            index={index}
          />
        ))}
      </CrosswordBoard>

      <button onClick={handleCreate}>SALVA E CREA QUESTO SCHEMA!</button>
    </div>
  )
}

export default CascataNew
