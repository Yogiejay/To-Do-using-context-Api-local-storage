import React , {useContext, useState} from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) {
    const [Inputdata , setInputdata] = useState("");
    const [dataArray , setdataArray ] = useState([]);
    const [toedit,settoedit] = useState(null);
   return (
    // <div>ContextProvider</div>
    <UserContext.Provider value={{Inputdata , setInputdata , dataArray , setdataArray,toedit,settoedit}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
