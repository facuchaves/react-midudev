import React, {useState} from 'react'

const Context = React.createContext({})

export const IssuesContextProvider = ({children}) => {
    const [issues, setIssues] = useState([])

    return <Context.Provider value={{issues, setIssues}} >
        {children}
    </Context.Provider>
}

export default Context