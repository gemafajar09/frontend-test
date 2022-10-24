import {createContex, useState} from 'react'

const AuthContex = createContex({})

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({})

    return (
        <AuthContex.Provider value={{auth,setAuth}}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthContex