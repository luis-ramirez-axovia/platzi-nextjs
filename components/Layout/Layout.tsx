import React from 'react'
import Navbar from '@components/Navbar/Navbar'

// import modulo from './style.module.css' Import CSS Modular

const Layout: React.FC = ({ children }) => {
  return (
    // <div className="container"> Global
    // <div className={modulo.container}> Modular
    <div>
      <Navbar />
      {children}
      <footer className='container'>a footer</footer>

      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
