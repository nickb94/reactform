import React, { useState } from "react";
import usePassConfirm from "./usePassConfirm"

const Confirm = ({ value }) => {

    const [cvalue, setValue] = useState("");
    const [style, setStyle] = useState({});

    const checkedValue = usePassConfirm({ value, cvalue });
    const isEmpty = () => {

        if (cvalue === "") {
            document.getElementById("cpasserror").textContent = "Should not be empty."
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
            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm Password"
                style={style}
                onBlur={isEmpty}
                onFocus={onFocus}
                id="conpass"
                value={checkedValue}
                onChange={e => setValue(e.target.value)}
            />
            <span id="cpasserror"></span>
        </div>
    );
}
export default Confirm