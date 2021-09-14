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
        $("#cleanme").fadeToggle(500,function(){
            $("#desktop").animate({backgroundColor:'#387bc7'},1500,function(){
                /* show login screen */
                $("#login").show()
                $("#cleanme").remove()
            });
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
    window.onload = function(){
        $("#desktop").children().hide();
        $("#loadtext").text("Get a bigger Screen!");
        $("#loadcheck").hide();
    }
function contact(){
    $("#contact").click(function(){
        $("#contactinfo").fadeToggle(1000)
        setTimeout(() => {
             $("#contactinfo").fadeToggle(1000)
        }, 7000);
   })
}