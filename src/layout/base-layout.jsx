import React from 'react'
import { Navbar } from '../components'

function BaseLayout({children}) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default BaseLayout