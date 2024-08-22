
import { action, actions, appState } from "./AuthContext";

const AuthReducer = (state:appState, action:action):appState => {
    
    //console.log(action)
    const run = (command:string):appState => {
        
        // const value = state.carts.filter((value)=>value.name!==action.payload.name)
       // console.log(action.payload.qnt)
        // const find = state.carts.find((value)=>value.name === action.payload.name)
        // if(action.payload.qnt===undefined) {
        //     return {
        //         ...state
        //     }
        // }
            
        if(command === actions.inc) {
            
            
            // if(action.payload.qnt === 0) {
            //     console.log("is zero")
            //     action.payload.qnt++
                
            //     return {
            //         ...state,
            //         carts:[...value,action.payload]
            //     }
            // }
           
        //action.payload.qnt = action.payload.qnt+1
        return {
            ...state,
            sum:state.sum+(action.payload.qnt*action.payload.price)
         //   carts:[...value,action.payload]
        }

        }
        else if(command === actions.dec) {
            // if(action.payload.qnt === 1) {
            //     action.payload.qnt--
                
            //     return {
            //         ...state,
            //         carts:[...value]
            //     }
            // }
            //if(action.payload.qnt>1) {
             //   action.payload.qnt--
           // }
            return {
                ...state,
                sum:state.sum-(action.payload.qnt*action.payload.price)
              //  carts:[...value,action.payload]
            }
        }
    
        return {
            ...state
        }
    }
    switch(action.type) {
        
        case actions.add:
            const find = state.carts.find((value=>value.name===action.payload.name))
            const value = state.carts.filter((value)=>value.name!==action.payload.name)
            if(find) {
                return {
                    ...state,
                    carts:[...value,action.payload]
                }
            }
            // const find = state.carts.find((value)=>value.name === action.payload.name)
            
            // if(!find) {
            //     action.payload.qnt = 1
            //     console.log(action.payload)
            //     return {
            //         ...state,
            //         carts:[...state.carts,action.payload]
            //     }
            // }
            // if(state.carts.includes(find)) {
            //     return {
            //         ...state
            //     }
            // }
            //state.carts[0].name ="DD" 
           
           // if(state.sum === 0)
            return {
                ...state,
                carts:[...value,action.payload],
                sum:state.sum+action.payload.price
                
            }
            // return {
            //     ...state,
            //     carts:[...value,action.payload],
            // }
            
            
           
        case actions.inc:
            return {
                ...state,
                sum:state.sum+action.payload.price
            }
          
          
        case actions.dec:
            return {
                ...state,
                sum:state.sum-action.payload.price
            }
        case actions.rem:
           const va = state.carts.filter((value)=>value.name !== action.payload.name) 
            return {
                ...state,
               carts:[...va],
               sum:state.sum-(action.payload.price*action.payload.qnt)
            }    
    default:
    return {
        ...state
    }
}
       

    }
export default AuthReducer;