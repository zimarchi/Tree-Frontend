import React, {useState} from "react";

const AssemblyLine = props => {
  
  let columns = {}
  for (let stage of props.stages) {
    columns[stage] = [] 
  }
  const [buttonsColumns, setButtonsColumns] = useState (columns)
  const [newInput, setNewInput] = useState("")
  
  const buttons = (stage) => {
    const allButtons = buttonsColumns[stage].map ((input, i) => { 
      return (
        <button
              data-testid="assembly-item"
              key = {i}
              onClick = {() => moveButtonToLeft (stage, input, i)}
              onContextMenu={(e)=> moveButtonToRight (e, stage, input, i)}
           >
              {input}
        </button>
      )
    })
    return allButtons
  }
  
  const stages = props.stages.map ((stage, index) => {
    return (
      <div
        data-testid="stage"
        key = {index} >
        <span> {stage} </span>
       {buttons(stage)}
      </div>
    )
  })

  function addNewButton () {
    const updatedObject = buttonsColumns
    updatedObject[props.stages[0]].unshift(newInput)
    setButtonsColumns (updatedObject)
    setNewInput("")
  }

  function moveButtonToLeft (stage, input, i) {
    const updatedObject = {...buttonsColumns}
    updatedObject[stage]= updatedObject[stage].filter((x,indexOfx) => (x !== input) || (indexOfx!==i)) // gestion des doublons
    let positionForward = props.stages.indexOf(stage)+1
    if (positionForward<props.stages.length) {
      updatedObject[props.stages[positionForward]].unshift(input)
    }
    setButtonsColumns (updatedObject)
  }
    
  function moveButtonToRight (e, stage, input, i) {
    e.preventDefault()
    const updatedObject = {...buttonsColumns}
    updatedObject[stage]= updatedObject[stage].filter((x,indexOfx) => (x !== input) || (indexOfx!==i)) // gestion des doublons
    let positionBackward = props.stages.indexOf(stage)-1
    if (positionBackward>=0) {
      updatedObject[props.stages[positionBackward]].push(input)
    }
    setButtonsColumns (updatedObject)
  }


  return (
    <>
      <input
        name = "newButton"
        data-testid = "add-item"
        onKeyDown = {e => e.key === "Enter" ? addNewButton() : null}
        onChange = {e => setNewInput(e.target.value)}
        value = {newInput}
      />
      <div id="stagesContainer">
        {stages}
      </div>
    </>
  );
};

export default AssemblyLine;