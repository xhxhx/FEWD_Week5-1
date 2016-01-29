$( document ).ready(function() {
        console.log( "document loaded" );

// Function to reset user input value 
function resetform() {
  document.getElementById("city-type").reset();
}

function cityCheck() {
  //Get the value of user input and store it as a variable
  var city = $("#city-type").val();

  // Check the input from user
  if ( city === "New York" || city === "New York City" || city === "NYC" ) {
    //CHange background image to nyc.jpg
    $("body").removeClass().addClass("nyc");
    return false;
  }else if ( city === "San Francisco" || city === "SF" || city === "Bay Area" ) {
    //Change background image to sf.jpg
    $("body").removeClass().addClass("sf");
    return false;
  }else if ( city === "Los Angeles" || city === "LA" || city === "LAX" ) {
    //Change background image to la.jpg
    $("body").removeClass().addClass("la");
    return false;
  }else if ( city === "Austin" || city === "ATX" ) {
    //Change background image to austin.jpg
    $("body").removeClass().addClass("austin");
    return false;
  }else if ( city === "Sydney" || city === "SYD" ) {
    //Change background image to sydney.jpg
    $("body").removeClass().addClass("sydney");
    return false;
  }else {
    //Catches any other errors
    alert ("Please enter a valid city!")
  }
}

//When user submits
$("#submit-btn").click(cityCheck);

});
