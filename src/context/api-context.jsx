'use client'
import React, { useContext, useEffect, useState } from 'react'

export const Api_dataContext = React.createContext()

const Api_data = ({children}) => {
    const [ selected, setSelected ]= useState('english')
    const [input, setInput] = useState('')

  return (
    <Api_dataContext.Provider value={{
        selected,
        setSelected,
        input,
        setInput
    }}>
        {children}
    </Api_dataContext.Provider>
  )
}

export const useNewsApi = ()=>{
    return useContext(Api_dataContext)
}

export default Api_data