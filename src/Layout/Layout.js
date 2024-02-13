import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <Header/>
      <main style={{minHeight:'85vh'}}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
