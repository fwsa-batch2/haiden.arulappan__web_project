function submitHandler() {
    event.preventDefault();

    let santhanu = document.getElementById("category").value;

    if (santhanu == "null") {
        return null;
    }

    if (santhanu == "west india") {
        window.location.href = "./Pages/hotels1.html"
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