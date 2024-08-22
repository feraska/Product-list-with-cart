import React, { useContext, useState } from "react"
import {actions, AuthContext} from "../../context/AuthContext"
import "./cart.scss"
import Image from "next/image"
import CartItem from "@/components/cartItem/CartItem"
import Order from "@/components/order/Order"
const Cart = () => {
    const {state,dispatch} = useContext(AuthContext)
    const [isOpen,setOpen] = useState(false)
   return (
    <>
    {isOpen&&<Order setIsOpen={setOpen}/>}
    <div className="cart">
        <div className="box">
            <h1>{`Your Cart ${state.carts.length}`} </h1>
            <div className="cartItems">
                {state.carts.map((value)=>(
                 <CartItem item={value} key={value.name}/>
                ))}
            </div>
            <div className="price">
                <span>Order Total</span>
                <span>{state.sum}</span>
            </div>
            <div className="copon">
                <div className="box">
                    <div className="list">
                <Image alt="" src={"/images/icon-carbon-neutral.svg"} width={100} height={100}/>
                <span>this is a <strong>carbon neutral</strong> dilevery</span>
                </div>
                </div>
            </div>
            <button onClick={()=>setOpen(true)} className="confirm">Confirm Order</button>
        </div>
    </div>
    </>
   )
}
export default Cart