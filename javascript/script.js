$(document).ready(function(){
    if($( window ).width() <= 600) {
        console.log("ss")
        $("#sub").after('<hr/>');
    }

    $('#message').focus(function(){
        $(this).attr('rows', '4');
    }).blur(function(){
    $(this).attr('rows',1);
  });;
});