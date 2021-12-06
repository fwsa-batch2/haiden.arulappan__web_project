  
function check(){
     event.preventDefault();

    let a = document.getElementById("create").value;
    let b = document.getElementById("conform").value;

    if(a==b){
     console.log("Matching");
     window.location.replace("../index.html");
    }
    else{
        console.log("Not matching");
        alert("Error")
    }

    
}