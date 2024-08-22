"use client"
import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { cart } from "@/interfaces/cart";


  
 
export interface action {
   type:string,
   payload:cart
}
export enum actions {
    add = "add",
    inc = "increment",
    dec = "decrement",
    rem = "remove"
}
interface Props {
    children: React.ReactNode;
  }
  
  export interface appState  {
    carts:Array<cart>,
    sum:number
  }
  const INITIAL_STATE:appState = {
      carts: [],
      sum:0
  }
interface Props {
   children: React.ReactNode;
 }
 interface context {
    state:appState,
    dispatch:React.Dispatch<action>
 }
 export const AuthContext = createContext<{
    state: appState;
    dispatch: React.Dispatch<action>;
  }>({
    state:INITIAL_STATE,
    dispatch: () => null
  });
  
export const AuthContextProvider:React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(

        <AuthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}