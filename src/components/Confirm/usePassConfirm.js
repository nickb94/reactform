const usePassConfirm = ({ value, cvalue }) => {

    const confirmPassword = ({ value, cvalue }) => {

        if (value !== cvalue) {
            document.getElementById("cpasserror").innerHTML = "Passwords do not match";
            document.getElementById("conpass").classList.add("warn-active");
        }
        else {
            document.getElementById("cpasserror").innerHTML = "";
            document.getElementById("conpass").classList.remove("warn-active");
        }
    }
    if (cvalue) {
        confirmPassword({ value, cvalue });
    }
}
export default usePassConfirm