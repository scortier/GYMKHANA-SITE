$(document).ready(function(){

    $("#so-cult").hide();
    $("#technology").hide();
     

    $("#div1").click(function(){
        $("#so-cult").hide();
       $("#technology").hide();
        $("#sports").show();
       
    });

    $("#div2").click(function(){
        $("#technology").hide();
        $("#sports").hide();
       $("#so-cult").show();
      
    });

    $("#div3").click(function(){
        $("#technology").show();
        $("#sports").hide();
       $("#so-cult").hide();
       
    });

});

