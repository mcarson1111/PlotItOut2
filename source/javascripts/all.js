// This is where it all goes :)
//= require jquery


$(document).ready(function() {
  console.log("Yay! Hi!")

  var User = {
    name: 'User',
    hardinessZone: '3',
    soilType: 'loamy',
    allVeggies: [ ],
    chosenVeggies: [ ]
    // plotSize
  }

  var form = $('.form')

  $('#submit').click(function() {
    var soil = $('#soil').val();
    var zone = $('#zone').val();

    console.log("ok")
    console.log(soil)
    console.log(zone)

    User.soilType = soil
    User.hardinessZone = zone

    console.log(User)

  })
})



function sendSoilTypeAndClimate() {
  //show about div and submit button

  //get the user input (text fields)
  $('#suchness :input, .text').on('click change', function() {

     User.soilType = $('#suchness :input');
     User.hardinessZone = $('#suchness :input')

     // adjust settings according to the form data
     $inputs.each(function() {
         $(this.name).val($(this).val());
     });
    alert("Submitted");
    console.log(values)
  });

  //save user input to User object

  //send unpout to API

  //send results to next interaction (show veggies)

  //hide about div and submit button when clicked
}

function showVeggiesToUser() {
  //show veggies div and submit button

  //loop through allVeggies array and display names in checkbox

  //save chosen veggies to User object (chosenVeggies)

  //hide veggies list div and submit button when button clicked
}

function showPlotAndVeggieList() {
  //display div of veggies

  //display plot

  //compare chosenVeggies array and allVeggies array to find attributes of veggies chosen to display

  //display image of chosen veggies
}
