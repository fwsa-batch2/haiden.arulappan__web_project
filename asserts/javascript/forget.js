function otp() {
    let array = new Uint16Array(1);
    self.crypto.getRandomValues(array);
    console.log(array);
    return array;
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
            Body: "Your OTP is : <strong style='color:#000; font-size:1vw;'>" + code + "</strong><br>Thank you"
        }).then(
            alert('Mail sent successfully!')
        );
    }

}

function submitHandler() {
    const codeFromUser = document.getElementById('otp').value;
    if (code == codeFromUser) {
        window.open("./../../../hotelinminuteapp-ui/index.html")
    } else {
        alert('otp is invalid');
    }
}