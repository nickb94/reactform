import React, { createContext, useState } from "react"
export const Mycontext = createContext();

export const Provider = props => {

   const [usernameContext, setusernameContext] = useState("")
   const [emailContext, setemailContext] = useState("")
   const [passContext, setpassContext] = useState("")
   const [conContext, setconContext] = useState("")
   const [numberContext, setnumberContext] = useState("")

   return (

      <Mycontext.Provider value={{ uvalue: [usernameContext, setusernameContext], evalue: [emailContext, setemailContext], pvalue: [passContext, setpassContext], cpvalue: [conContext, setconContext], nvalue: [numberContext, setnumberContext] }} >
         {props.children}
      </Mycontext.Provider>

   );


}


