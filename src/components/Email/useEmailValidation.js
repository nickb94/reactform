const useEmailValidation = (value) => {

    const checkEmail = () => {

        //few special characters barred
        var regexone = /^[ (  ) [ ] < > " : ; ]+$/;
        let f = false;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i; k >= 0; k--) {
                    var isV = regexone.test(value[k]);
                    if (isV) {
                        f = false;
                    }
                }
            }
        }
        if (f) {
            document.getElementById("emailerror").innerHTML = "Avoid special characters";
            const u = document.getElementById("emails");
            u.classList.add("warn-active")
            return false;
        }

        //few special characters allowed before "@" barred after "@"
        var regex = /^[{ } / ? ! # $ % ^ & * ' ` ~ -  + = _]+$/;
        let flagbeat = false;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i; k >= 0; k--) {

                    var isValid = regex.test(value[k]);
                    if (isValid) {
                        flagbeat = false;
                    }
                }
            }
        }
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i; k < value.length; k++) {

                    var isValids = regex.test(value[k]);
                    if (isValids) {
                        flagbeat = true;
                    }
                }
            }
        }
        if (flagbeat) {
            document.getElementById("emailerror").innerHTML = "Avoid special characters";
            const u = document.getElementById("emails");
            u.classList.add("warn-active")
            return false;
        }


        if (!isNaN(value)) {

            document.getElementById("emailerror").innerHTML = "Incorrect Email Address.";
            document.getElementById("emails").classList.add("warn-active");
            return false;

        }


        for (let i = 0; i < value.length; i++) {
            //spaces before after "@"
            if (value[i] !== "@" && value[i - 1] === "" && value[i + 1] === "") {
                document.getElementById("emailerror").innerHTML = "Invalid email address.";
                document.getElementById("emails").classList.add("warn-active");
                return false;
            }
            //"." before after "@"
            if ((value[i] === "@" && value[i + 1] === ".") || (value[i] === "@" && value[i - 1] === ".")) {
                document.getElementById("emailerror").innerHTML = "Check positions of '@' and '.'";
                document.getElementById("emails").classList.add("warn-active");
                return false;
            }
            //multiple dots together
            if ((value[i] === "." && value[i + 1] === ".")) {
                document.getElementById("emailerror").innerHTML = "Multiple dots together not allowed";
                document.getElementById("emails").classList.add("warn-active");
                return false;
            }

            if ((value[0] === "@") || (value[0] === ".")) {
                document.getElementById("emailerror").innerHTML = "Check '@' and '.' position.";
                document.getElementById("emails").classList.add("warn-active");
                return false;
            }
            //no dots in last
            for (let i = (value.length - 1); i < (value.length); i++)
                if (value[i] === ".") {
                    document.getElementById("emailerror").innerHTML = "Check characters after '.'";
                    document.getElementById("emails").classList.add("warn-active");
                    return false;
                }
        }

        //no space before "@"//////////////////
        var flagbe = false;

        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i; k >= 0; k--) {
                    if (value[k] === " ") {
                        flagbe = true;
                    }
                }
            };
        }
        if (flagbe) {
            document.getElementById("emailerror").innerHTML = "No space allowed before '@'.";
            document.getElementById("emails").classList.add("warn-active");
            return false;
        }
        //no space after "@"//////////////////
        var flagaf = false;

        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i + 1; k < value.length; k++) {
                    if (value[k] === " ") {
                        flagaf = true;
                    }
                }
            };
        }
        if (flagaf) {
            document.getElementById("emailerror").innerHTML = "No space allowed after '@'.";
            document.getElementById("emails").classList.add("warn-active");
            return false;
        }

        //for checking "@" should not follow "@" or only single "@" is allowed
        var flag = false;

        for (let i = 0; i < value.length; i++) {
            if (value[i] === "@") {
                for (let k = i + 1; k < value.length; k++) {
                    if (value[k] === "@") {
                        flag = true;
                    }
                }
            };
        }
        if (flag) {
            document.getElementById("emailerror").innerHTML = "Single '@' allowed.";
            document.getElementById("emails").classList.add("warn-active");
            return false;
        }

        //for checking there should be a '.' and '@'
        var flags = false;
        if (value) {
            for (let i = 0; i < value.length - 1; i++) {
                if (value.indexOf(".") === -1) {
                    flags = true;

                };
                if (value.indexOf("@") === -1) {
                    flags = true;
                };

            }
            if (flags) {
                document.getElementById("emailerror").innerHTML = "Characters '@' and '.' expected.";
                document.getElementById("emails").classList.add("warn-active");
                flags = false;
                return false;
            }

        }

        //length greater than 6 and '.' should be at 4rth or 3rd from the end.
        if (value.length < 6) {
            document.getElementById("emailerror").innerHTML = "Incorrect email address.";
            document.getElementById("emails").classList.add("warn-active");
            return false;
        }
        if (value.length > 6 && (value.charAt(value.length - 4) !== ".") && (value.charAt(value.length - 3) !== ".")) {
            document.getElementById("emailerror").innerHTML = "Check characters after '.'";
            document.getElementById("emails").classList.add("warn-active");
            return false;
        }
        else {
            document.getElementById("emailerror").innerHTML = "";
            document.getElementById("emails").classList.remove("warn-active");
        }
    }
    if (value) {
        checkEmail();
    }
    return value;
}

export default useEmailValidation