function login(event) {
    event.preventDefault();
    let email = document.getElementById("gmail").value;
    let password = document.getElementById("secret").value;
    const isexist = isuserexist(email, password);
    if (isexist) {
        localStorage.setItem("loggedinuser", email);
        window.open("./../../../hotelinminuteapp-ui/Pages/himform.17.html")
    }
    else {
        alert("invalid email or password");
        return null;
    }
}
function isuserexist(paramemail, parampassword) {
    let isexist = false;
    const userdetails = JSON.parse(localStorage.getItem("userList"));
    const len = userdetails.length;
    console.log(len);

    for (let i = 0; i < len; i++) {
        const user = userdetails[i];
        const useremail = user.Gmail;
        const userpassword = user.Create;
        if (useremail === paramemail && userpassword === parampassword) {
            isexist = true;
            break;
        }
    }
    return isexist;
}
function checkbox() {
    let check = document.getElementById("checking");
    if (check.checked) {
        document.getElementById("secret").type = "Text";
    }
    else {
        document.getElementById("secret").type = "password";
    }
}


