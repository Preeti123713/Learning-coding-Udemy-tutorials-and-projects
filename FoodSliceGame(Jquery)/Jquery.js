var playing = false;
var score,trialsLeft;
$(function(){
    // click on start reset button
$("#startreset").click(function(){
     //are you playing?
if(playing == true){ //yes
    location.reload();
}else{
    playing = true; // game initiated
    //set score to 0
    score = 0; // set score to 0
    $("#scorevalue").html(score);
 // show trials left
 $("#trialsLeft").show();
 trialsLeft = 3;
 addHearts();
 // change  button text to restart game
 $("#startreset").html("Reset Game");
 // start sending fruits
 startAction();

}
});
});
   
        
            //reload page
        // no
           
            // change button text to "reset game"
            // 1. create a random fruit
            //define a random step
            // 2. move fruit down one step every 30sec
                //is fruit too low??
                 // no->repeat nb2
                 //yes->any trials left?
                 //yes : repeat nb1
                 // no : show game over,button text :start game
                 
            //slice a fruit
                //play a sound
                //explode fruit
     
function addHearts(){ 
    for(i=0;i<trialsLeft;i++){
        $("#trialsLeft").append('<img src="images/heart.jpg">');        
    }
}
function startAction(){   
    $("#fruit").show();
    chooseFruit(); // choose a random fruit
}
// generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src', images/heart.jpg);
}
