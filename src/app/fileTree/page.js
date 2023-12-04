"use client"

import React from "react";
import FileTree from "@/components/FileTree";
import { useRouter } from 'next/navigation'

const treeExample = require("@/misc/treeExample");

export default function FileTreePage ({root}) {

  const router = useRouter();

  return (
    <div>


      <FileTree root={treeExample} depth = {0}/>

    </div>
  )
}
    

