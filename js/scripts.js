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
  $("form#cartoon").submit(function(event) {
    var personality = parseInt($("select#personality").val());
    var favecolor = parseInt($("select#favecolor").val());

    if (personality === 1 && favecolor === 2) {
      $().hide();
      $('#pic1').show();
    } else if (personality === 1 && favecolor === 1) {
      $().hide();
      $('#pic2').show();
    } else if (personality === 1 && favecolor === 3) {
      $().hide();
      $('#pic3').show();
    } else if (personality === 1 && favecolor === 4) {
      $().hide();
      $('#pic4').show();
    } else if (personality === 2 && favecolor === 2) {
      $().hide();
      $('#pic5').show();
    } else if (personality === 2 && favecolor === 1) {
      $().hide();
      $('#pic6').show();
    } else if (personality === 2 && favecolor === 3) {
      $().hide();
      $('#pic7').show();
    } else if (personality === 2 && favecolor === 4) {
      $().hide();
      $('#pic8').show();
    } else if (personality === 3 && favecolor === 2) {
      $().hide();
      $('#pic9').show();
    } else if (personality === 3 && favecolor === 1) {
      $().hide();
      $('#pic10').show();
    } else if (personality === 3 && favecolor === 3) {
      $().hide();
      $('#pic11').show();
    } else if (personality === 3 && favecolor === 4) {
      $().hide();
      $('#pic12').show();
    } else if (personality === 4 && favecolor === 2) {
      $().hide();
      $('#pic13').show();
    } else if (personality === 4 && favecolor === 1) {
      $().hide();
      $('#pic14').show();
    } else if (personality === 4 && favecolor === 3) {
      $().hide();
      $('#pic15').show();
    } else if (personality === 4 && favecolor === 4) {
      $().hide();
      $('#pic16').show();
    }                           
  });
  event.preventDefault(); 
});
 
// //Celeb Dating
//   $("form#matchmaking").submit(function(event) {

//     const age = parseInt($("input#age").val());
//     const hair = parseInt($("select#hair").val());

    
//     if (hair === "1" && age < 100) {
//       $('#pic2').show();
    
//     } else if (hair === "2" && age < 100) {
//       $('pic3').show();
    
//     } else if (hair === "3" && age < 100) {
//       $('pic7').show();
    
//     } else if (hair === "4" && age < 100) {
//       $('pic5').show();
//     $("#submit").click(function() {
//     $("#picture").show();
//     event.preventDefault();
//     }
//   };
  


// //Triangle Tracker
//   $("form#equal").submit(function(event) {
//     event.preventDefault();
//     const side1 = parseInt($("#input1").val());
//     const side2 = parseInt($("#input2").val());
//     const side3 = parseInt($("#input3").val());
//     let triResult;
//     if (side1 == side2); {
//       triResult = "equilateral"
//     }
    
//     $("#outputequal").text(triResult);
//   }
// });
// }); 
