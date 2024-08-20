import React from 'react'
import { createContext,useEffect, useState } from 'react'

export const AppContext= createContext();
export const AppProvider=({children})=>{
    const[user,setUser]=useState(
        JSON.parse(localStorage.getItem("user"))||null
    );
    const[selectedGenres,setSelectedGenres]=useState(
       JSON.parse(localStorage.getItem("selectedGenres"))||  []
    );

    return (
        <AppContext.Provider
        value={{
            user,
            setUser,
            selectedGenres,
            setSelectedGenres,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

// export default AppProvider