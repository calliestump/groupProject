// Business Logic

//Calculator
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


//Character



//Celeb Dating


//Triangle Tracker








// User Interface Logic

//Calculator
$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });

//Character
  $("form#age").submit(function(event) {
    event.preventDefault();
    const personality = $("select#personality").val();
    const favecolor = $("select#favecolor").val();

    if (personality === "happy" && favecolor === "red") {
      $('#under-18').hide();
      $('#legal').show();
    } else if (personality === "happy" && favecolor === "blue") {
      $('#legal').hide();
      $('#under-18').show();
    } else if (personality === "happy" && favecolor === "black") {
      $('#legal').hide();
      $('#under-18').show();
    } else if (personality === "happy" && favecolor === "yellow") {
      $('#legal').hide();
      $('#under-18').show();
    } else if (personality === "sad" && favecolor === "red") {
      $('#legal').hide();
      $('#under-18').show();
    } else if (personality === "sad" && favecolor === "blue") {
      $('#legal').hide();
      $('#under-18').show();
    } 
    else if (personality === "sad" && favecolor === "black") {
      $('#legal').hide();
      $('#under-18').show();
    }   else if (personality === "sad" && favecolor === "blue") {
      $('#legal').hide();
      $('#under-18').show();
    }          
  });



//Celeb Dating
  $("form#matchmaking").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const hair = $("select#hair").val();

    let image ="";
      if (age === 'blonde' $$ age <= 100); {
        $('kodku1').show();
      }
      if (age === 'red' $$ age <= 100); {
        $('kodku2').show();
      }
      if (age === 'dark' $$ age <= 100); {
        $('kodku5').show();
      }
      if (age === 'other' $$ age <= 100); {
        $('kodku4').show();
      } 
      
      $("#picture").show();

  });
  


//Triangle Tracker
  $("form#age").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt$("input#side2").val();
    const side1 = parseInt($("input#side3").val());

});