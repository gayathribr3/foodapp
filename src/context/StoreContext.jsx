import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
const [cartItems, setCartItems]=useState({});
                            //initialization
const addToCart=(itemId)=>{
    //if user added product first time in cart, hence itemid not available
    if(!cartItems[itemId]){
        //if item id is not available, one new entry is created, returns an object, where we will define item id and value will be 1
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        //if item is already available, increase its quantity, modifying itemid key
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)/* using for loop as, cartitems is an object and for loop will iterate over the object; and item will be 
    provided one by one, & item will be the key value of cartitems */
        {
            if(cartItems[item]>0)//executed only when quantity greater than 0
                {
                  let itemInfo=food_list.find((product)=>product._id===item)//means product available in cart
            totalAmount+=itemInfo.price* cartItems[item];
                }
        }
        return totalAmount;
}

//in contextvalue we can provide any value or function and  we can access that in any function using the context
//this is to get the support of context api in our project   
//we can access food_list array everywhere
const contextValue={
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
//The code is a React component that utilizes React's Context API to manage and share data across components in your application.
// import { createContext } from "react": This line imports the createContext function from the React library. 
//This function is used to create a context object, which acts as a central repository for data.

//StoreContextProvider
/* This component serves as a provider for the StoreContext. It's likely intended to be wrapped around a significant portion of your component tree.
const contextValue = { food_list }: Here, an object named contextValue is created. It contains a single property named food_list, whose value
is the imported food_list array. This object essentially holds the data you want to share through the context.
return (<StoreContext.Provider value={contextValue}> {props.children} </StoreContext.Provider>): This part returns a JSX element.
The <StoreContext.Provider> component is used to provide the context value to its child components.
The value prop of the Provider is set to the contextValue object, making the food_list array accessible to any component consuming this context.
props.children refers to the components nested within the StoreContextProvider. These child components will have access to the context value.
 This code creates a context called StoreContext that allows you to share the food_list array across components in your React application. 
 The StoreContextProvider component acts as a wrapper, making the context value available to its children. Any component within 
 the provider's hierarchy can then access and use the food_list data using the useContext hook */