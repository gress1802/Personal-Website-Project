/* This will add functionality to the projects page */
var pOverlay = document.getElementById("pOverlay");

function firstProject(){
    document.getElementById("firstProject").classList.add("active");
    pOverlay.classList.add("active");
}

function secondProject(){
    document.getElementById("secondProject").classList.add("active");
    pOverlay.classList.add("active");
}

function thirdProject(){
    document.getElementById("thirdProject").classList.add("active");
    pOverlay.classList.add("active");
}

function fourthProject(){
    document.getElementById("fourthProject").classList.add("active");
    pOverlay.classList.add("active");
}

function fifthProject(){
    document.getElementById("fifthProject").classList.add("active");
    pOverlay.classList.add("active");
}

function sixthProject(){
    document.getElementById("sixthProject").classList.add("active");
    pOverlay.classList.add("active");
}

function pExit(modal){ /* This is for exiting the modal */
    var mod = document.getElementById(modal);
    mod.classList.remove("active");
    pOverlay.classList.remove("active");
}   