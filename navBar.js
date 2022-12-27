/* This is a JavaScript file that produces the different styles and animations on the navigation bar */

window.onscroll = function(){scroll()};
var timer = null;

//This hides the scroll bar after a certain amount of idle time
window.addEventListener('scroll', function() {
    if(timer != null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        if(document.querySelector("#navigation:hover") != null){
            clearTimeout(timer);
        }else{
            document.getElementById("navigation").style.top = "-70px";
        }
    }, 1000);
}, false)

function scroll(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){ 
        document.getElementById("navigation").style.top = "0";

    }else{
        document.getElementById("navigation").style.top = "-70px";
    }
}

function home(){
    document.getElementById("startPage").scrollIntoView(true);
}

function aboutMe(){
    document.getElementById("aboutMeFlex").scrollIntoView(true);
}

function projects(){
    document.getElementById("projectsContainer").scrollIntoView(true);
}

function skills(){
    document.getElementById('skillsPageBody').scrollIntoView(true);
}

function mail(){
    document.getElementById("email").classList.add("active");
    pOverlay.classList.add("active");
}

