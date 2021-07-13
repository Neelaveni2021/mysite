import { StaticImage } from "gatsby-plugin-image";
import React from 'react';

import Layout from '../Components/layout';


const Homepage = () => {
  return (

    <Layout pageTitle='Home' pageHeading='Home Page' children>
         <h1>welcome to home page</h1>  

         <StaticImage 
         src="https://www.parkinson.org/sites/default/files/PD-diet.png"
         alt="food food"
         />
         
        
         
         
      </Layout>
  )
}

 
  
  
    
    
  
   

  

export default Homepage

