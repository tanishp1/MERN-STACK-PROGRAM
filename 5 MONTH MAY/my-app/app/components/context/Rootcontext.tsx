"use client"
import { useContext, createContext } from "react";

const userData = {
  name : "tanish",
  email : "pawartanish73@gmail.com",
  salary: "30LPA"
}

const DataContext = createContext(userData);

 export const RootContext = ({children}: {children: React.ReactNode}) => {
    return (
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    )
}

export const useContextData = () => useContext(DataContext)