import { createContext,useState } from "react";
import App from "../App";

export const FirebaseContext = createContext(null)

export const AuthContext = createContext('')

export default function Context({}){
    const [user,setUser]= useState('')

    return(
        <AuthContext.Provider value={{user,setUser}}>
           <App/>
        </AuthContext.Provider>
    )
}