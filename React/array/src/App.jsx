import { useState } from "react"


const INITIAL_VALUE = ["A", "B", "C"]

export default function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecific(letter) {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }
  function addLetterToEnd(letter) {
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  function clear() {
    setArray([])
  }
  function reset() {
    setArray(INITIAL_VALUE)
  }

  function updateAToH() {
    setArray(currentArray => {
      return currentArray.map(element => {
        if (element === "A") return "H"
        return element
      })
    })
  }

  return (

    <div>
      <button onClick={removeFirstElement}> remove</button><br /><br />
      <button onClick={() => removeSpecific("B")}> Specific B</button><br /><br />
      <button onClick={() => addLetterToStart("B")}> Add to Start</button><br /><br />
      <button onClick={() => addLetterToEnd("Z")}> Add to End</button><br /><br />
      <button onClick={clear}> Clear</button><br /><br />
      <button onClick={reset}> Reset</button><br /><br />
      <button onClick={updateAToH}> Update</button><br />
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />

      {array.join()}
    </div>
  )


}

