
var randomnum=Math.floor(Math.random()*101+19)

$('#toguess') .text(randomnum);


    imageCrystal.addClass("one", "two" ,"three", "four");

    imageCrystal.attr("src" "crystal1" "crystal2"  "crystal3" "crystal4");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  
    $("#gemimage").append(imageCrystal);
  }

  $(".gemimage").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("yourscore: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });