"use client"

import React from "react";
import AssemblyLine from "@/components/AssemblyLine";

const stagesExample = require("@/misc/stagesExample");

export default function AssemblyLinePage () {

  return (
    <div>

      <AssemblyLine stages={stagesExample}/>

    </div>
  )
}