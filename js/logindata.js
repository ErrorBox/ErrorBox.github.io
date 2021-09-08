function eastereggs(input){
    $.getJSON('https://errorbox.github.io/storage.json',function(data){
        var tes = data.password
        var test = data.username
        console.log("Usernames: " + tes)
        console.log("Passwords: " + test)
    })
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

            var usernamearr = data.username
            var passwordarr = data.password

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
            else{alert("create user")
            localStorage.setItem('useraccount',iuser)
            console.log("USERNAME SET TO " + localStorage.getItem('useraccount'))
            localStorage.setItem('userpass',ipass)
            console.log("PASSWORD SET TO " + localStorage.getItem('userpass'))
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
                  });

        };
            })
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