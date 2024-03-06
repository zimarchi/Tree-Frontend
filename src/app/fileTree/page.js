"use client"

import React from "react";
import FileTree from "@/components/FileTree";

const treeExample = require("@/misc/treeExample");

export default function FileTreePage () {

  return (
    <div>

      <FileTree root={treeExample} depth = {0}/>

    </div>
  )
}
    

