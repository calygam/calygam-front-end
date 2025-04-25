import { useContext } from "react";
import DataProfileContext from "../../context/FetchDataProfileContext/FetchDataProfileContext";

export function UseDataProfile(){
    return useContext(DataProfileContext)
}