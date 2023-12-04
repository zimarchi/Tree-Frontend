import {React, useState} from "react";

export default function FileTree ({root, depth}) {
    const [isExpanded, setIsExpanded] = useState (false)
    function handleExpand (e) {
      e.stopPropagation()
      setIsExpanded (!isExpanded)
    }
  
    return (
        <li type = {root.type}
          style = {{
            listStyle: "none",
            marginLeft: 20,
            color: `rgb(
                      ${ 10*depth > 255 ? 255 : 10*depth },
                      ${ 30*depth > 255 ? 255 : 30*depth },
                      ${ 50*depth > 255 ? 255 : 50*depth }
                    )`,
            fontWeight: root.type === "file" ? "normal":"bold",
            fontSize: 20,
          }}
          onClick = {handleExpand} >
          {root.type === "file" ? "" : (isExpanded ? "(-) " : "(+) ")}
          {root.name}
          <div  data-testid="dir-expand">
            {isExpanded && root.children?.map (
              (object) => (<FileTree root = {object} depth = {depth+1}/>)
            )}
          </div>
        </li>
        
    );
  };