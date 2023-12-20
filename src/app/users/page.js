"use client"

import React from "react";
import {usePathname} from 'next/navigation'

export default function Users () {

    const pathname = usePathname()
    console.log ("l'url c'est " + pathname)
    
    return (
        <>
            <p>USERS PAGE ATTEINTE !</p>
        </>
        );
  }