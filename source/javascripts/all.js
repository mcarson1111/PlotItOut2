// This is where it all goes :)
//= require jquery
var User = {
  name: 'User',
  hardinessZone: '3',
  soilType: 'loamy',
  allVeggies: [ ],
  chosenVeggies: [ ],
  veggieObjects: { }
  // plotSize
}

$(document).ready(function() {
  console.log("Yay! Hi!")

  $( "div.list").toggleClass( "hide" )
  $( "div.checkbox").toggleClass( "hide" )
  $( "div.plot").toggleClass( "hide" )
  $( "div.how").toggleClass( "hide" )


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


  // this is the submit button for the checkbox div
  $('#commit').click(function() {

    showPlotAndVeggieList()
  })
})


function sendSoilTypeAndClimate(User) {
  //show about div and submit button

  //get the user input (text fields)
  console.log(User)

  //save user input to User object

  //send input to API
  // let veggies = $.ajax({url: 'http://localhost:3001/veggies?' + 'soil=' + User.soilType +'&zone=' + User.hardinessZone, method: 'GET', success: function(result) {
  let veggies = $.ajax({url: 'https://plants-api.herokuapp.com/veggies?' + 'soil=' + User.soilType +'&zone=' + User.hardinessZone, method: 'GET', success: function(result) {
  // let veggies = $.ajax({url: 'https://git.heroku.com/plants-api.git/veggies?' + 'soil=' + User.soilType +'&zone=' + User.hardinessZone, method: 'GET', success: function(result) {

    // return  veggies
    console.log(result)
    console.log(result.veggies[0].name)
    console.log('this is result.veggies')
    console.log(result.veggies)

    allTheVeggies = []

    for (var i=0; i < result.veggies.length; i++) {
      allTheVeggies.push(result.veggies[i])

      var v_name = result.veggies[i].name

      veggieObjects = User.veggieObjects

      console.log(veggieObjects)

      veggieObjects[v_name] = 'poop'

      console.log(veggieObjects[v_name])

      veggieObjects[v_name] = result.veggies[i]

      console.log(veggieObjects[v_name])

    }


    console.log(User.veggieObjects)
    console.log('this is allTheVeggies after push')
    console.log(allTheVeggies)

    User.allVeggies = allTheVeggies

    console.log('this is User.allVeggies after reassignment')
    console.log(User.allVeggies)

    var theVeggies = User.allVeggies
    console.log(theVeggies)
    for (var i in theVeggies) {
      console.log(theVeggies[i].name)
    }

    showVeggiesToUser();
  }})


  //hide about div and submit button when clicked
  // Toggle the class and hide it using css
  $( "div.soilstuff" ).toggleClass( "hide" )

  // THIS BEONGS IN THE NEXT FUNCTION, BUT THE CALL ISNT WORKING
  // toggle hide to show checkbox div
  $( "div.checkbox").toggleClass( "hide" )

  $( "div.about").toggleClass( "hide" )

}

function showVeggiesToUser() {
  //show veggies div and submit button
  // toggle div class to show using css
  //loop through allVeggies array and display names in checkbox
  // THIS BELONGS IN THE NEXT FUNCTION, BUT THE CALL ISNT WORKING

  var theVeggies = User.allVeggies

  console.log(theVeggies)

  for (var i of theVeggies) {
    console.log(i)
    var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = "veggies";
      checkbox.value = i.name;
      checkbox.id = i.id;

      // checkbox.onclick = toggle(this);
      // checkbox.id = "i.name";
      // save the id as the name value? so on submit i can run through the array of veggies and check id each id is selected?

    var label = document.createElement('label')
      label.htmlFor = i.id;
      label.appendChild(document.createTextNode(i.name));

    document.getElementById("checkbox").appendChild(checkbox);
    document.getElementById("checkbox").appendChild(label);

    console.log(i.name)

  }

  var veggies = document.getElementsByName('veggies');

  console.log(veggies)

  for (var i=0; i < veggies.length; i++) {
    if (veggies[i].type == 'checkbox') {
      console.log(veggies[i])
      veggies[i].onclick = toggleThis;
    }
  }

 console.log('this is the show veggies function!')
  console.log(User)
  console.log(User.allVeggies)

}

function toggleThis() {
  if (this.checked) {
    console.log($(this))
    console.log('this is checked')
    console.log($(this)[0].value)

    User.chosenVeggies.push(($(this)[0].value))

    console.log(User.chosenVeggies)

  } else {
    console.log('this is not checked')

    var array = User.chosenVeggies
    var index = array.indexOf(($(this)[0].value));

    array.splice(index, 1)

    console.log(User.chosenVeggies)
  }
}


function showPlotAndVeggieList() {

  $( "div.checkbox").toggleClass( "hide" )

  $( "div.list").toggleClass( "hide" )

  $( "div.plot").toggleClass( "hide" )

  $( "div.how").toggleClass( "hide" )




  var chosenVeggies = User.chosenVeggies

  console.log(chosenVeggies)

  // do an if statement here if chosenVeggies == 0****

  console.log(User.veggieObjects)


  var new_div = document.createElement('div');
  new_div.className = "veggies";

  for ( var i of chosenVeggies) {

    var img = document.createElement('img');
      img.src = "/images/" + i + ".png";
      img.className = i;
      img.className += " veggie"
      new_div.appendChild(img);
  }

  var clones = document.createElement('div');
  clones.className = "clones";


  var table = document.createElement('table');

  for ( var i of chosenVeggies) {

    var myObj = User.veggieObjects

    if (i in myObj) {
      var companions = myObj[i].companions
    }

    console.log(myObj[i])
    console.log(myObj[i].companions)
    console.log(companions)

    if (i in myObj) {
      var foes = myObj[i].foes
    }

    console.log(foes)

    if (i in myObj) {
      var space = myObj[i].space
    }

    console.log(space)

    if (i in myObj) {
      var sunshine = myObj[i].sunShine
    }

    console.log(sunshine)

    if (i in myObj) {
      var start = myObj[i].start
    }

    console.log(start)

    var row = document.createElement('tr')
    row.className = i + "stuff";

    var th = document.createElement('th');
      th.innerHTML = i;
      row.appendChild(th);

    // var img = document.createElement('img');
    //   img.src = "/images/" + i + ".png";
    //   row.appendChild(img);

    var td = document.createElement('td');
      td.innerHTML = "companions: " + companions;
      row.appendChild(td);

    var td = document.createElement('td');
      td.innerHTML = "foes: " + foes;
      row.appendChild(td);

    var td = document.createElement('td');
      td.innerHTML = "space needed: " + space + " inches";
      row.appendChild(td);

    var td = document.createElement('td');
      td.innerHTML = "sunshine needed: " + sunshine;
      row.appendChild(td);

    var td = document.createElement('td');
      td.innerHTML = "where to start: " + start;
      row.appendChild(td);

      table.appendChild(row);
  }

  // $(".clonelist").append(clones)
  document.body.appendChild(new_div);
  document.body.appendChild(clones);
  document.body.appendChild(table);
  // document.body.insertBefore( new_div, table )

    // $( '.veggie' ).draggable();

  // IS THIS WHERE THE FUNCTIONALITY FOR DRAG AND DROP SHOULD GO?
  $('.veggie').dblclick(function() {
    console.log($(this))
    var $veggie = $(this)
    var $clone = $veggie.clone(false).appendTo( ".clones" )
    $clone.draggable();
    console.log($clone)

  })


  $( ".plot" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        console.log(event)

        // document.getElementsByClassName("clones").remove($(this));
        // document.getElementsByClassName("clones").remove(event.toElement);
        // document.body.clones.remove($(this))
        // $(".clones").remove($(this))
        // $(event.target).append(event.toElement)
        // $(event.toElement).css({position: "initial"});

        // could make mini divs inside the .plot and have the image snap to one of those?
        // tried making them append to the image instead of the div
        // tried confining the size of the plot
        // tried messing with the position in css of the clones div and of the images that are dropped
    }
  });


}
