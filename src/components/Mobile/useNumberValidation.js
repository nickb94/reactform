const useNumberValidation = (value) => {

    const mobileNumberChecks = (value) => {

        if (isNaN(value)) {
            document.getElementById("numbererror").innerHTML = "Only Numerical digits are allowed";
            document.getElementById("number").classList.add("warn-active");
            return false;
        }
        if (value.length < 10 || value.length > 10) {
            document.getElementById("numbererror").innerHTML = "Number must be of 10 digits";
            document.getElementById("number").classList.add("warn-active");
            return false;
        }
        else {
            document.getElementById("numbererror").innerHTML = "";
            document.getElementById("number").classList.remove("warn-active");
        }
    }
    if (value) {
        mobileNumberChecks(value);
    }
}

export default useNumberValidation