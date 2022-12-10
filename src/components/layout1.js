import { Link } from 'gatsby'
import React from 'react'

const Layout = ({pageTitle, children}) => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
            </ul>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </nav>
    </div>
  )
}

export default Layout
