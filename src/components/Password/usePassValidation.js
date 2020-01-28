const usePassValidation = (value) => {

    const Passwordfunc = () => {

        if (value.length < 8 || value.length > 20) {
            document.getElementById("passerror").innerHTML = "Password must be between 8 and 20 letters";
            document.getElementById("pass").classList.add("warn-active")
            return false;
        }

        if (!isNaN(value)) {
            document.getElementById("passerror").innerHTML = "Password cannot only be numerical values";
            document.getElementById("pass").classList.add("warn-active")
            return false;
        }

        if (value) {
            let j = true;
            for (let i = 0; i < value.length; i++) {
                if (value[i + 1] - value[i] === 1 && value[i + 2] - value[i + 1] === 1 && value[i + 3] - value[i + 2] === 1) {
                    document.getElementById("passerror").innerHTML = "Cannot contain consecutive natural numbers : Ex- 1234";
                    j = false;
                    document.getElementById("pass").classList.add("warn-active")
                }
            }
            if (j) {
                document.getElementById("passerror").innerHTML = "";
                document.getElementById("pass").classList.remove("warn-active")
            }
        }
    }

    if (value) {
        Passwordfunc();
    }
    return value;
}

export default usePassValidation

