import { Height, PostAdd } from '@material-ui/icons'
import React from 'react'

const PageNotFound = () => {
  return (
    <div 
      style={{
          width:"100%",
           height:"100vh",
          backgroundColor:"grey",
          position:"fixed",
        //   display:"inline-block"
      }}
    >
           <h1
             style={{
                 textAlign:"center",
                 paddingTop:"20%",
                 color:"green",
                 fontSize:"40px",
                

             }}
           >Page Not Found</h1>
    </div>
  )
}

export default PageNotFound