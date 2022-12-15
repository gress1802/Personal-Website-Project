/* This is a JavaScript file that produces the different styles and animations on the navigation bar */

window.onscroll = function(){scroll()};
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
    document.getElementById("aboutMe").scrollIntoView(true);
}

function projects(){

}

function contact(){

}

function github(){

}

function mail(){

}

function linkedin(){

}