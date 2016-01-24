var state = "on";

function lightswitch(){
  if ( state === "on"){
    $("body").addClass("dark");
    state = "off"; //Update the state here
  }else if (state === "off"){
    $("body").removeClass("dark");
    state = "on"; //Update the state here
  }
}

$("#light_switch").click(lightswitch);
