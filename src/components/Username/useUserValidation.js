const useUserValidation = (value) => {

    const User = (value) => {

        if (value.length < 4 || value.length > 20) {

            document.getElementById("usernameerror").innerHTML = "Length should be between 4 and 20";
            document.getElementById("username").classList.add("warn-active");
            return false;
        }
        if (!isNaN(value)) {
            document.getElementById("usernameerror").innerHTML = "Try a few letters."
            const u = document.getElementById("username");
            u.classList.add("warn-active")
            return false;
        }
        var regex = /^[A-Za-z0-9]+$/;
        var isValid = regex.test(value);

        if (!isValid) {
            document.getElementById("usernameerror").innerHTML = "Avoid special characters.";
            const u = document.getElementById("username");
            u.classList.add("warn-active")
        }
        else {
            document.getElementById("usernameerror").innerHTML = "";
            document.getElementById("username").classList.remove("warn-active")
        }
    }

    if (value) {
        User(value);
    }
    return value;
}


export default useUserValidation