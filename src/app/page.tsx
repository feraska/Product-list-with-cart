"use client"
const Desserts = dynamic(()=>import("@/components/deserts/Desserts"),{ssr:false})
import { AuthContext } from "@/context/AuthContext"
import "./home.scss"
import "@/global.scss"
// import { AuthContextProvider } from "@/context/AuthContext"
import dynamic from "next/dynamic"
import { useContext } from "react"
import CartEmpty from "@/components/cartEmpty/CartEmpty"
import Cart from "@/components/cart/Cart"
const Home = () => {
  const {state} = useContext(AuthContext)
  return(
    
    <div className="home">
    <Desserts/>
    {state.carts.length === 0?<CartEmpty/>:<Cart/>}
  </div>
 
  )
   
}
export default Home