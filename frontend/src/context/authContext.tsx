import React from "react";
import { getUsersByID } from "../api/usersAPI";
import useReactQueryHook from "./../hooks/reactQueryHook";
type authContextType = {
  id: string;
  token: string;
  userData?: any;
  userType: string;
};
const defaultState: authContextType = {
  id: localStorage.getItem("id") || "",
  token: localStorage.getItem("token") || "",
  userType: "User",
};
export const AuthContext = React.createContext<authContextType>(defaultState);

export const AuthContextProvider = (props: any) => {
  const [id, setId] = React.useState(defaultState.id);
  const [token, setToken] = React.useState(defaultState.token);
  const [userType, setUserType] = React.useState(defaultState.userType);
  const { isLoading, error, data } = useReactQueryHook(
    () => getUsersByID(id),
    id
  );

    React.useEffect(() => {
        if (!isLoading) 
        {
            // @ts-ignore
            setUserType(data.user_type); 
        }
    },[isLoading])
    
  if (isLoading) {
    return (
      <AuthContext.Provider value={{ id, token, userType }}>
        {props.children}
      </AuthContext.Provider>
    );
  }
  return (
    <AuthContext.Provider value={{ id, token, userType, userData: data }}>
      {props.children}
    </AuthContext.Provider>
  );
};
