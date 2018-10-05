var email = document.getElementById("email");
var phone = document.getElementById("phone");
var twitterName = document.getElementById("twitname");
var form = document.getElementsByTagName('form');

var boxesPortofolio = `<div class="port-box">test</div>`;

//nav responsive function
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//  //portfolio boxes
//  var boxesPortofolio = `<div class="port-box">My Project</div>`
// document.getElementById("portBoxes").innerHTML = boxesPortofolio.repeat(2);

//function for the forms
email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail from you :) !");
    } else {
        email.setCustomValidity("");
    }
});

phone.addEventListener("input", function () {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Dutch phone number, please :)");
    } else {
        phone.setCustomValidity("");
    }
});

// twitterName.addEventListener("input", function (event){
//     if (twitterName.validity.patternMismatch) {
//         twitterName.setCustomValidity("I want your real twitter name, darling!!");
//     } else {
//         email.setCustomValidity("");
//     }
// });

