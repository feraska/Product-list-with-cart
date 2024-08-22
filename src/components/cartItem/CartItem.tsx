import Image from "next/image"
import React, { useContext } from "react"
import { actions, AuthContext } from "../../context/AuthContext"
 import "./cartItem.scss"
import { cart } from "@/interfaces/cart"
// interface c extends item{
//     // name:string,
//     qnt:number 
//    // price:number
// }
interface props {
    item:cart
}

const CartItem:React.FC<props> = ({item}) => {
    const {dispatch} = useContext(AuthContext)
    const remove = () => {
        dispatch({type:actions.rem,payload:item})
    }
    // item.qnt = 0
    return(
        <div className="row">
                       
        <div className="col">
        <span>{item.name}</span>
        <div className="qnt">
            <span className="col1">{item.qnt}</span>
            <div className="dq">
               
                <div className="sp">
                    <span>@</span>
                    <span>{item.price}</span>
                </div>
                <span>{item.qnt*item.price}</span>
            </div>
            </div>
        </div>
        <Image onClick={remove} alt="" src={"/images/icon-remove-item.svg"} width={100} height={100}/>
        </div>
    )
}
export default CartItem