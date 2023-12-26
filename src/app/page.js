"use client"

import React from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Home () {
    const router = useRouter();

    return (
        <main>
            <Link href = '/users'> Vers Users</Link>
            <button onClick={()=> router.push ('/fileTree')}>Ouvrir Tree</button>
        </main>
        );
  }