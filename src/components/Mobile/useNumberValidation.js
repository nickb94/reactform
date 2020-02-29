import { Mycontext } from "../Context/Context"
import React from "react";


const useNumberValidation = (value) => {

    const { nvalue } = React.useContext(Mycontext)
    const [, setnumberContext] = nvalue;


    const mobileNumberChecks = () => {

        if (isNaN(value)) {
            document.getElementById("numbererror").innerHTML = "Only Numerical digits are allowed";
            document.getElementById("number").classList.add("warn-active");
            setnumberContext("");
            return false;
        }
        if (value.length < 10 || value.length > 10) {
            document.getElementById("numbererror").innerHTML = "Number must be of 10 digits";
            document.getElementById("number").classList.add("warn-active");
            setnumberContext("");
            return false;
        }
        else {
            document.getElementById("numbererror").innerHTML = "";
            document.getElementById("number").classList.remove("warn-active");
            setnumberContext(value);
        }
    }
    if (value) {
        mobileNumberChecks();
    }
    return value;
}

export default useNumberValidation;