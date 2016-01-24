var total = 0;

function setToZero(){
  total = 0; //this redefines the value when function is called

  $("#result").html(total);
}

function addFive() {
  total = total + 5;

  $("#result").html(total);
}

function addTen() {
  total = total + 10;

  $("#result").html(total);
}

function subtractOne() {
  total = total - 1;

  $("#result").html(total);
}

// This calls the id #result and updates the value
// $("#result").html("a new value")

// This calls the button click function
// Bindings
$("#zero").click(setToZero);
$("#add5").click(addFive);
$("#add10").click(addTen);
$("#sub1").click(subtractOne);
