import React from 'react'
import { AuthContextProvider } from "./authContext";
import { UserSelectionContextProvider } from './userSelection'

const GlobalContextWrapper = (props:any) => {
    return (
      <AuthContextProvider>
      <UserSelectionContextProvider>
      { props.children}
      </UserSelectionContextProvider>
      </AuthContextProvider>
  )
}

export default GlobalContextWrapper