import React from "react"
import Image from "next/image"
import { cart } from "../../interfaces/cart"
import "./orderItem.scss"

interface props {
    order:cart
}
const OrderItem:React.FC<props> = ({order}) => {
    return(
        <div className="row">
            <div className="left">
               <Image alt="" src={order.image.desktop.substring(8)} width={100} height={100}/>
               <div className="details">
                <span>{order.name}</span>
                <div className="info">
                    <span>{order.qnt}</span>
                    <div className="price">
                        <span>@</span>
                        <span>{order.price}</span>
                    </div>
                </div>
               </div>
            </div>
            <div className="right">
                <span>{order.price*order.qnt}</span>
            </div>
        </div>
    )
}
export default OrderItem