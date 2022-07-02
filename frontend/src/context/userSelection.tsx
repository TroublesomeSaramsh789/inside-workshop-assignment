import React from 'react'

export type userSelectionContextType = {
  LatestId:string;
  userSelectedId: string[];
  setLatestId:(id: string) => void;
  userSelectedIdHandler: (id: string) => void;
};
const initialState: userSelectionContextType = {
  LatestId: "",
  userSelectedId: [],
  setLatestId: (id: string)=> {},
  userSelectedIdHandler: (id: string)=> {}
};
export const UserSelectionContext = React.createContext<userSelectionContextType>(initialState);


export const UserSelectionContextProvider = (props: any) => {
  const [LatestId, setLatestId] = React.useState<string>("");
  const [userSelectedId, setUserSelectedId] = React.useState<string[]>([]);
  const userSelectedIdHandler = (id: string) => {
    let newUserSelectedId = [...userSelectedId];
    newUserSelectedId.push(id);
    setUserSelectedId(newUserSelectedId);
  };
  return (
    <UserSelectionContext.Provider
      value={{
        userSelectedId,
        LatestId,
        userSelectedIdHandler,
        setLatestId
      }}
    >
      {props.children}
    </UserSelectionContext.Provider>
  );
};;