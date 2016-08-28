// This is where it all goes :)
//= require jquery
var User = {
  name: 'User',
  hardinessZone: '3',
  soilType: 'loamy',
  allVeggies: [ ],
  chosenVeggies: [ ]
  // plotSize
}

$(document).ready(function() {
  console.log("Yay! Hi!")


  var form = $('.form')

  $('#submit').click(function() {
    var soil = $('#soil').val();
    var zone = $('#zone').val();

    console.log("ok")
    console.log(soil)
    console.log(zone)

    User.soilType = soil
    User.hardinessZone = zone

    sendSoilTypeAndClimate(User)

    //need to do this all as a called function instead of as a document ready so it doesnt keep showing up... :/

  })
})


function sendSoilTypeAndClimate() {
  //show about div and submit button

  //get the user input (text fields)
  console.log(User)

  //save user input to User object

  //send input to API
  let veggies = $.ajax({url: 'http://localhost:3001/veggies?' + 'soil=' + User.soilType +'&zone=' + User.hardinessZone, method: 'GET', success: function(result) {
    // return  veggies
    console.log(result)
    console.log(result.veggies[0].name)
    console.log(result.veggies)

    allTheVeggies = []

    for (var i=0; i < result.veggies.length; i++) {
      allTheVeggies.push(result.veggies[i])
    }

    console.log(allTheVeggies)

    User.allVeggies = allTheVeggies

    console.log(User.allVeggies)
  }})

  //send results to next interaction (show veggies)

  //hide about div and submit button when clicked
  // Toggle the class and hide it using css

  showVeggiesToUser(User);
}

function showVeggiesToUser() {
 console.log('this is the show veggies function!')
  console.log(User)
  console.log(User.allVeggies)

  //show veggies div and submit button
// toggle div class to show using css

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
