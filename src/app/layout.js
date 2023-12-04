export const metadata = {
  title: 'Test Nazim 1',
  description: 'First trial with the new Next Framework v.14',
}

import Link from 'next/link'

import './globals.css'

export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
        <div id = "header"> 
          <p>!!!!!!!!!!!!!!! header !!!!!!!!!!!!!</p>
          <Link href = '/'>Vers home</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
