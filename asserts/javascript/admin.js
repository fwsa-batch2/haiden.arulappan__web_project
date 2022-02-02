function submitHandler(event) {
    event.preventDefault();

    let adminaccess = document.getElementById("code").value;

    if (adminaccess == "12345") {
        window.open("./../../../hotelinminuteapp-ui/Pages/addinghotel.html")
    }
    else {
        alert("please enter the required access code")
    }
}