import React, { useState } from "react"
import usePassValidation from "./usePassValidation"
import Confirm from "../../components/Confirm/Confirm"

const Password = () => {

    const [value, setValue] = useState("");
    const [style, setStyle] = useState({});

    const checkedValue = usePassValidation(value);

    const isEmpty = () => {
        if (checkedValue === "") {
            document.getElementById("passerror").textContent = "Should not be empty."
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
            <label>Password</label>
            <input
                type="text"
                placeholder="Password"
                style={style}
                onBlur={isEmpty}
                onFocus={onFocus}
                id="pass"
                value={checkedValue}
                onChange={e => setValue(e.target.value)}
            />
            <span id="passerror"></span>
            <Confirm value={value} />
        </div>
    );
}

export default Password