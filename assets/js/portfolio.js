var email = document.getElementById("email");
var phone = document.getElementById("phone")
var twitterName = document.getElementById("twitname");
var form = document.getElementsByTagName('form');

var boxesPortofolio = `<div class="port-box">test</div>`

//nav responsive function
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

//  //portfolio boxes
//  var boxesPortofolio = `<div class="port-box">My Project</div>`
// document.getElementById("portBoxes").innerHTML = boxesPortofolio.repeat(2);

//function for the forms
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail from you :) !");
        } else {
            email.setCustomValidity("");
            }
            });


phone.addEventListener("input", function (event) {
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

