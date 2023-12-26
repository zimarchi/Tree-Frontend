import React, {useState} from "react";

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
            marginLeft: 30,
            color: `rgb(
                      ${ 42*depth > 255 ? 255 : 42*depth },
                      ${ 27*depth > 255 ? 255 : 27*depth },
                      ${ 16*depth > 255 ? 255 : 16*depth }
                    )`,
            fontWeight: root.type === "file" ? "normal":"bold",
            fontSize: 20,
          }}
          onClick = {handleExpand}
        >
          {root.type === "file" ? "" : (isExpanded ? "(-) " : "(+) ")}
          {root.name}
          {isExpanded && root.children?.map (
              (object) => (
                <div title = {object.name}>
                  <FileTree root = {object} depth = {depth+1}/>
                </div>
              )
          )}
        </li>
    );
};