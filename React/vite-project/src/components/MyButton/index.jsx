import React from "react";
import classes from "./index.module.css";




const MyButton = ({label, onClickHandler, variant}) => {
    const buttonClick= () => {
        onClickHandler();
    };
    
    return(
    <button className={classes[variant]} onClick={()=>{buttonClick()}}>
    {label} 
    </button>
)
};
export default MyButton;
  
