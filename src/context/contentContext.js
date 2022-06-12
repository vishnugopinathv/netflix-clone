import React,{useState,useContext} from "react";

const ContentContext=React.createContext();

export const ContentContextProvider=({children})=>{
    const [myList,setMyList]=useState([]);
    return(
        <ContentContext.Provider value={{myList,setMyList}}>
            {children}
        </ContentContext.Provider>
    )
}
export const useContextConsumer=()=>{
    return useContext(ContentContext);
}