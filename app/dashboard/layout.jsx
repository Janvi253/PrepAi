import React from 'react'
import header from './_components/header'

function DashboardLayout({children}) {
  return (
    <div>
      <header/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout