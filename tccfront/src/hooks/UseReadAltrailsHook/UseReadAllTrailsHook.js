import { useContext } from "react";

import ReadAllTrailsContext from "../../context/ReadAllTrailsContext/ReadAllTrailsContext";

export function UseReadAllTrailsHook(){
    return useContext(ReadAllTrailsContext)
}