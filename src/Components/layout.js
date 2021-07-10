import React, { Children } from 'react'
import {Link} from 'gatsby'
import {container, heading , navLinks,navLinkItem , navLinkText} from './layout.module.css'
console.log('container: ', container )

const Layout = ({ pageTitle, pageHeading, children }) => {
    return(
        <main className= {container}>
            <title>{pageTitle}</title>
           <nav>
               <ul className={navLinks}>
                   <li className={navLinkItem}><Link to = "/" className={navLinkText}>Home Page</Link></li>
                   <li className={navLinkItem}><Link to ="/about" className={navLinkText}>About Page</Link></li>
                   <li className={navLinkItem}><Link to ="/contact" className={navLinkText}>Contact Page</Link></li>
               </ul>
           </nav>

           <h1 className={heading}>{pageHeading}</h1>
           {children}

           

        </main>

    )
}

export default Layout