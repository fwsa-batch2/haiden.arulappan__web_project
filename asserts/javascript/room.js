
let Getdetails = localStorage.getItem("reviewer");
let parsedetails = JSON.parse(Getdetails);
let text = "";
let len = parsedetails.length;
for (let i = 0; i < len; i++) {
    text += "Name:" + parsedetails[i].Name + "<br>" +
        "Ratings:" + parsedetails[i].Ratings + "<br>" +
        "feedback:" + parsedetails[i].Feedback + "<br>" + "<hr>";

}
document.getElementById("enter").innerHTML = text;