function submitHandler(event) {
    event.preventDefault();

    let santhanu = document.getElementById("category").value;

    if (santhanu == "null") {
        return null;
    }

    if (santhanu == "west india") {
        window.open("./../hotelinminuteapp-ui/Pages/hotels1.html")
    }

    else if (santhanu == "east india") {
        window.location.href = "./Pages/hotels2.html"
    }

    else if (santhanu == "north india") {
        window.location.href = "./Pages/hotels3.html"
    }

    else {
        window.location.href = "./Pages/hotels4.html"
    }
}

function loginRecomendation() {
    const loggedinUser = localStorage.getItem('loggedinuser');
    console.log(loggedinUser);
    if (loggedinUser === null) {
        if (confirm("Please login to continue..")) {
            window.location.href = "./Pages/signup.html";

        }
    } else {
        document.getElementById('sign-up').style.display = "none";
        document.getElementById('sign-in').style.display = "none";
        document.getElementById('logout').style.display = "block"

    }
}
function Logoutuser() {
    const loggedinUser = localStorage.getItem('loggedinuser');
    localStorage.removeItem("loggedinuser");
    localStorage.removeItem("userList");
    document.getElementById("logout").style.display = "none";
    document.getElementById('sign-up').style.display = "block";
    document.getElementById('sign-in').style.display = "block";
    if (loggedinUser === null) {
        if (confirm("Please login to continue..")) {
            window.location.href = "./Pages/signup.html";
        }
    }
    setTimeout(Logoutuser, 2000);
}

setTimeout(loginRecomendation, 2000);
