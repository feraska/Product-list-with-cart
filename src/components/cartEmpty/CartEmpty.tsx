import Image from "next/image"
import "./cartEmpty.scss"
const CartEmpty = () => {
    return(
        <div className="empty">
            <div className="box">
                <h1>Your Cart (0)</h1>
                <div className="bottom">
                    <Image alt="" src={"/images/illustration-empty-cart.svg"} width={100} height={100}/>
                    <span>Your add items appear here</span>
                </div>
            </div>
        </div>
    )
}
export default CartEmpty