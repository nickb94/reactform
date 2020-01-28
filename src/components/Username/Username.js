import React, { useState } from "react"
import useUserValidation from "./useUserValidation"


const Username = () => {

    const [value, setValue] = useState("");
    const [style, setStyle] = useState({});

    const checkedValue = useUserValidation(value)

    const isEmpty = () => {
        if (checkedValue === "") {
            document.getElementById("usernameerror").textContent = "Should not be empty."
        }

        setStyle({
            transition: "0.3s ease-in-out"
        })
    }
    const onFocus = () => {

        setStyle({
            boxShadow: "0 0 0px 3px #b9daf0",
            transition: "0.3s ease-in-out"
        })
    }

    return (
        <div>
            <label>Username</label>
            <input
                type="text"
                onBlur={isEmpty}
                onFocus={onFocus}
                style={style}
                placeholder="Username"
                id="username"
                value={checkedValue}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}


export default Username