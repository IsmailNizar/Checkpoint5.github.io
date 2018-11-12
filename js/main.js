$(document).ready(function(){
    $("#bold").click(function(){
        $("textarea").toggleClass("style1");
    });
});
$(document).ready(function(){
    $("#italic").click(function(){
        $("textarea").toggleClass("style2");
    });
});
$(document).ready(function(){
    $("#underlined").click(function(){
        $("textarea").toggleClass("style3");
    });
});

var array = ["black" , "grey" , "white" ];
var i =0  ;

setInterval(function repeat(){ 
    i++;
    if (i > 2) {i= 0;} 
     $("#titre").css("color", array[i]);
},2000);


$("#style").change(function() {
    var type = $( "#style option:selected" ).text();
    if (type == "Arial"){
        $("#textarea").css("fontFamily", "Arial, Helvetica, sans-serif");   
   }else if (type == "Bellino") {
    $("#textarea").css("fontFamily", "bellino");  
   }
   else if (type == "Mentega") {
    $("#textarea").css("fontFamily", "mentega"); 
   }
   else if (type == "Sketch") {
    $("#textarea").css("fontFamily", "sketch");
   }
});

$("#Taille").change(function() {
    var type = $( "#Taille option:selected" ).text();
    if (type == "10px"){
        $("#textarea").css("fontSize", "10px");     
   }else if (type == "22px") {
    $("#textarea").css("fontSize", "22px");   
   }
   else if (type == "1em") {
    $("#textarea").css("fontSize", "1em");   
   }
   else if (type == "1.5em") {
    $("#textarea").css("fontSize", "1.5em");  
   }else if (type == "2em") {
    $("#textarea").css("fontSize", "2em");  
   }else if (type == "40px") {
    $("#textarea").css("fontSize", "40px");  
   }
});
