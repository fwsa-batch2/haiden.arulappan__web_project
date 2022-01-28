
/**
 * Search by date
 */
function submitHandler(event) {
    event.preventDefault();
    let input = document.getElementById("season").value;
    const dateMonth = input.slice(5);
    const date = dateMonth.slice(3);
    const month = dateMonth.slice(0, 2);
    let parsedDate = parseInt(date);
    let parsedMonth = parseInt(month);
    switch (parsedMonth) {
        case 01:
            if (parsedDate >= 13 && parsedDate <= 17) {
                document.getElementById('season5').style.display = "block";
            }
            else {
                document.getElementById('season1').style.display = "block";
            }
            break;
        case 02:
            document.getElementById('season1').style.display = "block";
            break;
        case 03:
            document.getElementById('season1').style.display = "block";
            break;
        case 04:
            document.getElementById('season2').style.display = "block";
            break;
        case 05:
            document.getElementById('season2').style.display = "block";
            break;
        case 06:
            document.getElementById('season2').style.display = "block";
            break;
        case 07:
            document.getElementById('season3').style.display = "block";
            break;
        case 08:
            document.getElementById('season3').style.display = "block";
            break;
        case 09:
            document.getElementById('season3').style.display = "block";
            break;
        case 10:
            document.getElementById('season4').style.display = "block";
            break;
        case 11:
            document.getElementById('season4').style.display = "block";
            break;
        case 12:
            if (parsedDate >= 24 && parsedDate <= 26) {
                document.getElementById('season9').style.display = "block";
            }
            else {
                document.getElementById('season4').style.display = "block";
            }
            break;

    }
}


