let ReviewerList = [];

function pageload() {

    let gettingReviewerList = JSON.parse(localStorage.getItem("reviewer"));
    if (gettingReviewerList != null) {
        ReviewerList = gettingReviewerList;
    }
}

function Review(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let ratings = document.getElementById("Ratings").value;
    let feedback = document.getElementById("feedback").value;

    let sub = document.getElementById("text");
    sub.style.fontSize = "40px";
    sub.style.marginLeft = "80px"
    const isexist = isuserexist(email);
    if (isexist) {
        const review_list = {
            "Name": name,
            "Ratings": ratings,
            "Feedback": feedback
        }
        ReviewerList.push(review_list);
        console.log(fullarray);
        localStorage.setItem("reviewer", JSON.stringify(ReviewerList));
        window.location.href = "./../../Pages/our_reviews.html"
        sub.innerText = "Thank you for reviewing us"
    }
    else {
        alert("please use the registered email to review");
        return null;
    }


}
function isuserexist(paramemail) {
    let isexist = false;

    const userdetails = JSON.parse(localStorage.getItem("userList"));
    const len = userdetails.length;
    console.log(len);

    for (let i = 0; i < len; i++) {
        const user = userdetails[i];
        const useremail = user.Gmail;
        if (useremail === paramemail) {
            isexist = true;
            break;
        }
    }
    return isexist;
}


pageload();