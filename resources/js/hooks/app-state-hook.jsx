import React, {useEffect, useState, createContext, useContext} from 'react'

const AppstateContext = createContext({})

export const AppStateProvider = ({children}) => {
    const [bookRequest, setBookRequest] = useState({});

    const values = {
        bookRequest, setBookRequest
    }

    useEffect(() => {}, [])
    return (
        <AppstateContext.Provider value={values}>
            {children}
        </AppstateContext.Provider>
    ) 
}


export const useAppState = () => useContext(AppstateContext)
