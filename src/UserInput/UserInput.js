import React from "react";

const userInput = (props) => {
    const inputStyle = {
        backgroundColor: "tomato"
    }

    return (
        <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName}/>
    )
}

export default userInput;