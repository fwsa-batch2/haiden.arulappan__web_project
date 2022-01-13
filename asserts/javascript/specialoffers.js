

function submitHandler(event) {
    event.preventDefault();
    let input = document.getElementById("season").value;
    const dateMonth = input.slice(5);

    const date = dateMonth.slice(3);
    const month = dateMonth.slice(0, 2);
    let parsedDate = parseInt(date);
    let parsedMonth = parseInt(month);

    let january = parsedDate >= 13 && parsedDate <= 18;
    let newyear = parsedDate >= 1 && parsedDate <= 5;
    let independ = parsedDate >= 13 && parsedDate <= 16;
    let diwali = parsedDate >= 12 && parsedDate <= 16;
    let christmas = parsedDate >= 20 && parsedDate <= 28

    if (parsedMonth == 1 && january) {
        document.getElementById("season5").style.display = "block";
    }
    else if (parsedMonth == 1 && newyear) {
        document.getElementById("season6").style.display = "block";
    }
    else if (parsedMonth == 8 && independ) {
        document.getElementById("season7").style.display = "block";
    }
    else if (parsedMonth == 11 && diwali) {
        document.getElementById("season8").style.display = "block";
    }
    else if (parsedMonth == 12 && christmas) {
        document.getElementById("season9").style.display = "block";
    }
    else if (parsedMonth >= 1 && parsedMonth <= 3) {
        document.getElementById("season1").style.display = "block";
    }
    else if (parsedMonth > 3 && parsedMonth <= 6) {
        document.getElementById("season2").style.display = "block";
    }
    else if (parsedMonth >= 7 && parsedMonth <= 9) {
        document.getElementById("season3").style.display = "block";
    }
    else if (parsedMonth >= 10 && parsedMonth <= 12) {
        document.getElementById("season4").style.display = "block";
    }

    else {
        alert("please enter the valid date")
    }
}