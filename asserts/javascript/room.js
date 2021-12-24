
let aswath = localStorage.getItem("reviewer");
let haiden = JSON.parse(aswath);
console.log(haiden);
let text = "";

for (i = 0; i < haiden.length; i++) {
    text += "Name:" + haiden[i].Name + "<br>" +
        "Ratings:" + haiden[i].Ratings + "<br>" +
        "feedback:" + haiden[i].Feedback + "<br>" + "<hr>";

}
document.getElementById("enter").innerHTML = text;