function navDetect(){
    $(document).keydown(function (event) {
        if (event.which == 27) {
             $(".menu").fadeToggle(500);
        }
   })
}
function draggable(){
    $(function () {
        $(".program").draggable({handle:".titlebar", containment:"#desktop",scroll:"false"})
       });
       $(function () {
        $(".iconcontainer").draggable({grid:["10","10"], containment:"#desktop",scroll:"false"})
       });
    }
function resize(){
    $(function() {
        $( ".program" ).resizable({containment:"#desktop"});
     });}

function toDesktop() {
    $("#starter").click(function(){
        $("#desktop").fadeToggle(500);

        $("#second").animate({height:'0vw'},1000)
        $("#last").animate({height:'0vw'},1000);
        $("#footer").animate({height:'0vw'},1000);
        $("#base").animate({height:'0vw'},1000,function () {
            $("#cleanme").remove();

            $(this).remove();
          });


        $("#desktop").animate({backgroundColor:'#387bc7'},500,function(){
            /* show login screen */
            $("#login").show()
        });
    });}
function testspawn() {
    $(".testspawn").dblclick(function () {
        $("#desktop").append('<div class="program"><div class="titlebar"><img src="img/ecks.png" class="closebut"><img src="img/fullscreen.png" class="fullscreenbut"><img src="img/minimize.png" class="minibut"><script>programbuttons();</script></div>');
        draggable();
        resize();
      })
  }
function programbuttons() {
      $(".closebut").click(function () {
          console.log("tried to press");
          $(this).closest('.program').remove();
        })
    }
function areyoureadykids() {
    var intervalId = window.setInterval(function(){
        if(window.innerWidth < 1000){
            $("#loadcheck").show()
        }
        if(window.innerWidth > 1000) {
            $("#loadcheck").hide()
        }
   },100)
    window.onload = function(){
        $("#desktop").children().hide();
        $("#loadtext").text("Get a bigger Screen!");
        $("#loadcheck").hide();
    }
  }
