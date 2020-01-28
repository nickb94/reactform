import React, { useState } from "react"
import useEmailValidation from "./useEmailValidation";

const Email = () => {

    const [value, setValue] = useState("");
    const [style, setStyle] = useState({});

    const checkedValue = useEmailValidation(value);

    const isEmpty = () => {
        if (checkedValue === "") { document.getElementById("emailerror").textContent = "Should not be empty." }

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
            <label>Email</label>
            <input
                type="text"
                placeholder="Email Id"
                style={style}
                onBlur={isEmpty}
                onFocus={onFocus}
                id="emails"
                value={checkedValue}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}




export default Email 