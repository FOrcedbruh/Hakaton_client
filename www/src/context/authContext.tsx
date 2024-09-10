import { useContext, createContext, useState, useEffect } from "react";


const authContext = createContext<any>({
    authUser: null,
    setAuthUser: null
})

export const useAuthContext = () => {
    return useContext(authContext)
}


export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [authUser, setAuthUser] = useState<any>('');

    useEffect(() => {
        //@ts-ignore
        setAuthUser(JSON.parse(localStorage.getItem('user')));
    }, [])

    return (
        <authContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </authContext.Provider>
    )
}