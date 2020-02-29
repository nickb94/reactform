import React, { useState } from "react"
import useNumberValidation from "./useNumberValidation"

const Mobile = () => {

    const [value, setValue] = useState("");
    const [style, setStyle] = useState({});

    const checkedValue = useNumberValidation(value);

    const isEmpty = () => {
        if (checkedValue === "") {

            document.getElementById("numbererror").textContent = "";
            document.getElementById("number").classList.remove("warn-active");
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
            <label>Mobile Number</label>
            <input
                type="text"
                onBlur={isEmpty}
                onFocus={onFocus}
                style={style}
                placeholder="Mobile Number"
                id="number"
                value={checkedValue}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}

export default Mobile