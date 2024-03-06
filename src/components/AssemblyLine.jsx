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
              onClick = {() => moveButtonToLeft (stage, input, i)} // clic avec bouton gauche de la souris
              onContextMenu={(e)=> moveButtonToRight (e, stage, input, i)} // clic avec bouton droit de la souris (contextuel)
           >
              {input}
        </button>
      )
    })
    return allButtons
  }
  
  const stages = props.stages.map ((stage, index) => { //mapping des entetes de chaque colonne
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
    const updatedObject = {...buttonsColumns} //Utiliser la syntaxe avec le spread operator
    updatedObject[props.stages[0]].unshift(newInput) // ajout en haut de la colonne
    setButtonsColumns (updatedObject)
    setNewInput("") //vidage du champ input
  }

  function moveButtonToLeft (stage, input, i) { //déplacement vers la gauche en haut de la colonne ou sortie du tableau
    const updatedObject = {...buttonsColumns} //Utiliser la syntaxe avec le spread operator
    updatedObject[stage]= updatedObject[stage].filter((x,indexOfx) => (x !== input) || (indexOfx!==i)) // gestion des doublons
    let positionForward = props.stages.indexOf(stage)+1
    if (positionForward<props.stages.length) {
      updatedObject[props.stages[positionForward]].unshift(input) //en haut de la colonne
    }
    setButtonsColumns (updatedObject)
  }
    
  function moveButtonToRight (e, stage, input, i) { //déplacement vers la droite en bas de la colonne ou sortie du tableau
    e.preventDefault() //Empecher le comportement par défaut du clic droit du bouton de la souris
    const updatedObject = {...buttonsColumns} //Utiliser la syntaxe avec le spread operator
    updatedObject[stage]= updatedObject[stage].filter((x,indexOfx) => (x !== input) || (indexOfx!==i)) // gestion des doublons
    let positionBackward = props.stages.indexOf(stage)-1
    if (positionBackward>=0) {
      updatedObject[props.stages[positionBackward]].push(input) //en bas de la colonne
    }
    setButtonsColumns (updatedObject)
  }


  return (
    <>
      <input
        name = "newButton"
        data-testid = "add-item"
        onKeyDown = {e => e.key === "Enter" ? addNewButton() : null} //validation saisie avec la touche Entrée
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