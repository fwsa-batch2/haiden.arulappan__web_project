
function login() {
    event.preventDefault();

    let email = document.getElementById("gmail").value;
    let password = document.getElementById("secret").value;

    const isexist = isuserexist(email, password);
    console.log(isexist);

    if (isexist) {
        localStorage.setItem("loggedinuser", email);
        window.location.href = "./../../index.html"
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

    for (i = 0; i < len; i++) {
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


