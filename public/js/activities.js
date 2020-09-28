$(document).ready(function(){

    $("#cultural").hide();
    $("#technology").hide();
     

    $("#div1").click(function(){
        $("#cultural").hide();
       $("#technology").hide();
        $("#sports").show();
       
    });

    $("#div2").click(function(){
        $("#technology").hide();
        $("#sports").hide();
       $("#cultural").show();
      
    });

    $("#div3").click(function(){
        $("#technology").show();
        $("#sports").hide();
       $("#cultural").hide();
       
    });

});

