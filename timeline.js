//This is the code for the timeline icons
var overlay = document.getElementById("overlay");

function school(){
    document.getElementById("firstModal").classList.add("active");
    overlay.classList.add("active");
}

function motionVolleyball(){
    document.getElementById("secondModal").classList.add("active");
    overlay.classList.add("active");
}

function frontDesk(){
    document.getElementById("thirdModal").classList.add("active");
    overlay.classList.add("active");
}

function matteos(){
    document.getElementById("fourthModal").classList.add("active");
    overlay.classList.add("active");
}

function goodtimes(){
    document.getElementById("fifthModal").classList.add("active");
    overlay.classList.add("active");
}

function johnsonControls(){
    document.getElementById("sixthModal").classList.add("active");
    overlay.classList.add("active");
}

function exit(modal){ /* This is for exiting the modal */
    var mod = document.getElementById(modal);
    mod.classList.remove("active");
    overlay.classList.remove("active");
}   
