function otp() {
    const random = Math.random();
    return Math.floor((random * 9999) + 1111);
}
let code = otp();

function sendEmail() {

    const useremail = document.getElementById('mail').value;
    if (useremail == "") {
        alert('please enter valid email');
    } else {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "minuteshotelin@gmail.com ",
            Password: "kadalmeenomr ",
            To: useremail,
            From: "minuteshotelin@gmail.com",
            Subject: "This is the otp for your email that you have logging in the hotel in minutes",
            Body: code
        }).then(
            alert('Mail sent successfully!')
        );
    }

}

function submitHandler() {
    const codeFromUser = document.getElementById('otp').value;
    if (code == codeFromUser) {
        window.location.href = "./../../index.html"
    } else {
        alert('otp is invalid');
    }
}