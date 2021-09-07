function autocook(){
    var intervalId = window.setInterval(function(){
        var cook = localStorage.getItem("cookie")
        var math = parseFloat(cook) + 1; /* add buildings and multiplyers here */
        localStorage.setItem("cookie",math)   },1000)
}
function textupdate(){
    var intervalId = window.setInterval(function(){
        $("#cookietext").text("Errors: " + localStorage.getItem("cookie"))
    },10)
}
function firsttime(){
    $(document).ready(function(){
        if(localStorage.getItem("cookie") != null) {
            console.log("data found")
        }
        else{
            console.log("No local data found")
            console.log("adding variables")
            localStorage.setItem("cookie",0)
        }
    })
}
function clickcook(){
    $("#bigbut").click(function(){
        var cookie = localStorage.getItem("cookie")
        var math = parseFloat(cookie) + 1;
        localStorage.setItem("cookie",math)
    })
}
function resdetect() {
    var intervalId = window.setInterval(function(){
        var screenX = window.innerHeight
        var screenY = window.innerWidth
        var str = "X: " + screenX + " Y: " + screenY;
        $("#resolution").text(str)

        var textwidth = $("#cookietext").width() / 2
        $("#cookietext").css( { "margin-left" : -textwidth })
   },10)
}
function openstore(){
    $("#buildings").click(function(){
        $("#buildingshop").toggle();
    })
}
function openupgrade(){
    $("#upgrades").click(function(){
        $("#upgradeshop").toggle()
    })
}

function cheat(code,value){
     if(code == "adderror") {
        var internal = localStorage.getItem("cookie")
        internal += value;
        localStorage.setItem("cookie",internal)
     }
     if(code == "seterror"){
         localStorage.setItem("cookie",value)
     }
}