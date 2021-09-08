function showeggs(){
    console.log(usernamearr)
    console.log(passwordarr)
}

function checkname() {

    


    function include(arr, obj) {
    
        for(var i=0; i<arr.length; i++) {
            if (arr[i] === obj) return true;
        }
    }

    var usernamearr = new Array()
    var passwordarr = new Array()

        $.getJSON('https://errorbox.github.io/storage.json',function(data){
            sessionStorage.setItem('usernamearray',data.username)
            sessionStorage.setItem('passwordarray',data.password)
        })
        var usernamearr = new Array(sessionStorage.getItem('usernamearray'));
        var passwordarr = new Array(sessionStorage.getItem('passwordarray'));
        console.log(usernamearr)
        console.log(passwordarr)

        var iuser = $('input[name=username]').val();
        var ipass = $('input[name=password]').val();

        if(include(usernamearr,iuser) && include(passwordarr,ipass)){
            console.log("LOGIN IN TO " + iuser)
            /* set background to black, fade into background */
            $('#desktop').animate({backgroundColor:"black"},0,function () {
                $('#login').remove();
                /* add loading screen */
                $('#desktop').animate({backgroundColor:'black'},500,function () {              
                    $('#desktop').animate({backgroundColor:'green'},500,function () { 
                        $('#desktop').children().show();  
                    })
            })
              })
        }
        else{alert("login with inputed text")};        
  }
  function enterlogin() {
    $(document).keydown(function (event) {
        if(event.which == 13){
            checkname();
            $("#cleanme").remove();
        }
      })
  }
  function loginbutt() {$("#loginbutton").click(function () { 
        checkname();
        $("#cleanme").remove();

  });  }