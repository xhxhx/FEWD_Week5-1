
function cityCheck() {
  //Get the value of user input and store it as a variable
  var city = $("#city-type").val();

  // Check the input from user
  if ( city === "New York" || city === "New York City" || city === "NYC" ) {
    //CHange background image to nyc.jpg
    $("body").addclass("nyc");
  }else if ( city === "San Francisco" || city === "SF" || city === "Bay Area" ) {
    //Change background image to sf.jpg
    $("body").addclass("sf");
  }else if ( city === "Los Angeles" || city === "LA" || city === "LAX" ) {
    //Change background image to la.jpg
    $("body").addclass("la");
  }else if ( city === "Austin" || city === "ATX" ) {
    //Change background image to austin.jpg
    $("body").addclass("austin");
  }else if ( city === "Sydney" || city === "SYD" ) {
    //Change background image to sydney.jpg
    $("body").addclass("sydney");
  }else {
    //Catches any other errors
    alert ("Please enter a valid city!")
  }
}

//When user submits
$("#submit-btn").click(cityCheck);
