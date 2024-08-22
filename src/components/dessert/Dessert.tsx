"use client"
import React, { useContext, useEffect, useState } from "react"
import "./dessert.scss"
import Image from "next/image"
import { actions, AuthContext } from "@/context/AuthContext"
import {item} from "@/interfaces/item"
interface props {
    item:item
}

const Dessert:React.FC<props> = ({item}) => {
   
    const mediaQueryList = window.matchMedia('(max-width: 375px)');
    const image = mediaQueryList.matches?"mobile":"desktop"
    const [isActive,setIsActive] = useState(false)
    const {state,dispatch} = useContext(AuthContext)
    
    const [qnt,setQnt] = useState(1)
    // useEffect(()=> {

    //     dispatch({type:actions.add,payload:{...item,qnt:qnt}})
    // },[qnt])
    const addClick = () => {
       setIsActive(true)
       dispatch({type:actions.add,payload:{...item,qnt:qnt}})
       
        //if(isActive)
        //console.log({type:"add"})
       // dispatch({type:actions.add,payload:{...item,qnt:qnt}})
   
    }
    const plus = () => {
       // dispatch({type:actions.add,payload:{...item,qnt:qnt}})
      
        setQnt((prev)=>prev+1)
        dispatch({type:actions.add,payload:{...item,qnt:qnt+1}})
        dispatch({type:actions.inc,payload:{...item,qnt:qnt+1}})
        
    }
    const minus = () => {
       // dispatch({type:actions.add,payload:{...item,qnt:qnt}})
       if(qnt>1) {
        setQnt((prev)=>prev-1)
        dispatch({type:actions.add,payload:{...item,qnt:qnt-1}})
        dispatch({type:actions.dec,payload:{...item,qnt:qnt-1}})
       }
    }
    return (
        <div className="dessert">
            <div className="item">
            <div className="top">
                <Image alt="ww" src={`${item.image[image].substring(8)}`} width={100} height={100} className="cat"/>
               {!isActive?
               (
                <div className="button add" onClick={addClick}>
                    <Image alt="" src={"/images/icon-add-to-cart.svg"} width={100} height={100} className="cart"/>
                    <span>Add To Cart</span>
                </div>
               ):
               (
                <div className="button active" onMouseLeave={()=>setIsActive(false)}>
                    <span onClick={minus}>-</span>
                    <span>{qnt}</span>
                    <span onClick={plus}>+</span>
                </div>
               )
               
                }
            </div>
            <div className="bottom">
                <span>{item.category}</span>
                <span>{item.name}</span>
                <span>{item.price}</span>
              
            </div>
            </div>
        </div>
    )
}
export default Dessert