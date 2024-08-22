import React, { useContext } from "react"
import "./order.scss"

import {AuthContext} from "../../context/AuthContext"
import Image from "next/image"
import OrderItem from "../orderItem/OrderItem"
interface props {
    setIsOpen:(p:boolean)=>void
}
const Order:React.FC<props> = ({setIsOpen}) => {
    const {state} = useContext(AuthContext)
    return(
        <div className="order" onClick={()=>setIsOpen(false)}>
            <div className="box">
                <div className="list">
                    <Image alt="" width={100} height={100} src={"/images/icon-order-confirmed.svg"}/>
                    <div className="header">
                        <h1>Order Confirmed</h1>
                        <span>we hope you enjoy your food!</span>
                    </div>
                    <div className="orders">
                        {state.carts.map((value)=>(
                            <OrderItem key={value.name} order={value}/>
                        ))}
                        <div className="bottom">
                            <span>Order Total</span>
                            <span>{state.sum}</span>
                        </div>
                    </div>
                    <button>Start New Order</button>
                </div>
            </div>
        </div>
    )
}
export default Order