window.onload = function () {

    var checkbox = document.getElementById("foreigner");
    document.getElementById("submit").onclick = function () {
        if (checkbox.checked) {
            document.getElementById("pesel").value = null;
        }
    }
}

function validate() {

    var errorMsg = "";
    const regexLetters = /^([a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ -]){2,30}$/;
    const regexPhone = /^([0-9]{9})$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!document.getElementById("time").value){
        document.getElementById("time").classList.add("invalid");
        errorMsg = errorMsg + "\nPlease select the time of your visit";
    }

    if(!regexLetters.test(document.getElementById("name").value)){
        document.getElementById("name").classList.add("invalid");
        var errorMsg = errorMsg + "\n\n" +
            "Invalid first name";
    }

    if(!regexLetters.test(document.getElementById("lname").value)){
        document.getElementById("lname").classList.add("invalid");
        errorMsg = errorMsg + "\nInvalid last name";
    }

    if(!document.getElementById("foreigner").checked) {
        if(!isValidPesel(document.getElementById("pesel").value)){
            document.getElementById("pesel").classList.add("invalid");
            var errorMsg = errorMsg + "\nInvalid Pesel";
        }
    }

    if(!regexPhone.test(document.getElementById("phnumber").value)) {
        document.getElementById("phnumber").classList.add("invalid");
        errorMsg = errorMsg + "\nInvalid phone number";
    }

    if(!regexEmail.test(document.getElementById("mail").value)) {
        document.getElementById("mail").classList.add("invalid");
        errorMsg = errorMsg + "\nInvalid e-mail address";
    }

    if(!errorMsg == ""){
        alert(errorMsg);
        return false;
    }
    return true;
}

function isValidPesel(pesel) {
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let controlNumber = parseInt(pesel.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber;
}
