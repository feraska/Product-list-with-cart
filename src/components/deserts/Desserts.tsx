"use client"
const  Dessert =  dynamic(()=>import("@/components/dessert/Dessert"),{ssr:false})
import dynamic from "next/dynamic"
import "./desserts.scss"
import data from "@/data.json"
const Desserts = () => {
    return(
        <div className="desserts">
            <div className="box">
            <h1>Desserts</h1>
            <div className="items">
            {data.map((value,i)=>(
                <Dessert key={value.name} item={value}/> 
            ))}
            </div>
            </div>
        </div>
    )
}
export default Desserts