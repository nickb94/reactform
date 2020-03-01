
import { Mycontext } from "../Context/Context"
import React from "react";

const usePassConfirm = ({ value, cvalue }) => {

    const { cpvalue } = React.useContext(Mycontext);
    const [, setusernameContext] = cpvalue;

    const confirmPassword = ({ value, cvalue }) => {

        if (value !== cvalue) {
            document.getElementById("cpasserror").innerHTML = "Passwords do not match";
            document.getElementById("conpass").classList.add("warn-active");
            setusernameContext("");
        }
        else {
            document.getElementById("cpasserror").innerHTML = "";
            document.getElementById("conpass").classList.remove("warn-active");
            setusernameContext(value);
        }
    }
    if (cvalue) {
        confirmPassword({ value, cvalue });
    }
}
export default usePassConfirm;