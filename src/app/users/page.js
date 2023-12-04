"use client"

import React from "react";
import { useRouter, usePathname} from 'next/navigation'

export default function Users () {

    const pathname = usePathname()
    console.log ("l'url c'est " + pathname)
    
    const router = useRouter();
    
    return (
        <>
            <p>USERS PAGE ATTEINTE !</p>
        </>
        );
  }