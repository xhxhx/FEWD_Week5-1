
function compareNumbers() {
  // Get the value of input #a and input #b
  // This stores the value of #a into a variable, same for b
  var a = $("#a").val();
  var b = $("#b").val();

  var comparison = $("#comparison");

  a = Number(a);
  b = Number(b);

  //To check if the input fields are empty
  // if ( !!a === false || !!b === false) {
  //   alert ("Please input a number into both fields")
  //   return;
  // }

// To turn it into numbers because it is getting returned as a string through .val()
  // a = parseInt(a);
  // b = parseInt(b);

//If there were decimals
  a = parseFloat(a);
  b = parseFloat(b);

// console.log(a, typeof a)
// console.log(b, typeof b)

  //Check that they are numbers
  if ( a > b ) {
    //if a is greater than b
    comparison.html('>');
  }else if ( a < b) {
    //if a is less than b
    comparison.html('<');
  }else if ( a === b ) {
    //if a is equal to b
    comparison.html('===');
  }else{
    //something else that is not right
    comparison.html('NaN');
  }
}else{
  alert ("Please input a number into both fields")
}

$("#submit").click(compareNumbers);
