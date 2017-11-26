import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is some placeholder text! Hi {props.username}!</p>
            <p>Here is more placeholder text! Bye {props.username}!</p>
        </div>
    )
}

export default userOutput;