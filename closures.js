
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  var buttons = $('button');

  var buttonClick = function(i) {
    // A new closure is created for each call of buttonClick.
    // This allows i to be different each time a button is clicked.
    // If we didn't define i in *this* function, then we would use
    //   the outermost function's i, which is 4 after iteration is
    //   finished.
    $(buttons[i]).on('click', function() {
      $('#clicked-btn').text('You clicked button #' + i);
    });
  }

  for (var i = 0; i < buttons.length; i++) {
    // Place the event listener in a function called buttonClick.
    // The index is passed along so that a new closure can be created
    //   for each iteration.
    buttonClick(i);
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          //So what goes wrong here?
                          setTimeout( (function() {
                            this.mood = "Happy!";

                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!")
                          }), 1000);
                      })
           };



  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);


};











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});
