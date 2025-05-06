import { useContext } from "react";
import LoadingContext from "../../context/LoadingContext/LoadingContext";

export function UseLoading(){
    return useContext(LoadingContext)
}