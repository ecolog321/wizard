import { useContext } from "react"
import { DataContext } from "../dataContext"


export const useData=()=>{
    return useContext(DataContext);
}