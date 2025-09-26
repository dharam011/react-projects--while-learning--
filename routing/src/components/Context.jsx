import React, { useState } from 'react'
import { createContext } from 'react'

export const dataContext = createContext()


const Context = ({children}) => {
    const [formdata,setFormData] = useState([])


const addData = (data) => {
    setFormData((prev) => [...prev, data]);
    
  };

  return (
    <dataContext.Provider value={{formdata,addData}}>
        {children}
    </dataContext.Provider>
  )
}

export default Context