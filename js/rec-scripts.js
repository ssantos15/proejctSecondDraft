var receipients = {};

function Receipient(name, age, people, city, from, to, message) {
  this.name = name;
  this.age =age;
  this.people= people;
  this.city = city;
  this.from = from;
  this.to = to;
  this.message = message;
}

//Front-end ///////////////////////////////////////////////
$(document).ready(function(){
  $("#receipient").submit(function(event){
    event.preventDefault();

    var recName = $("#rec-name").val();
    var recAge = $("#rec-age").val();
    var recPeople = $("#rec-people").val();
    var recCity = $("#rec-city").val();
    // var recSupplies = $("#rec-supplies").val();
    // var recLat = parseInt($("#rec-lat").val());
    // var recLng = parseInt($("#rec-lng").val());
    var recFrom = $("#rec-from").val();
    var recTo = $("#rec-to").val();
    var recMessage = $("#rec-to").val();

    // console.log(recName);
    // console.log(recAddress);
    // console.log(recSupplies);
    // console.log(recLat);
    // console.log(recLng);
    // console.log(recFrom);
    // console.log(recTo);

    //create Receipient instance based on the input.
    var recInstance = new Receipient (recName)

    $("#rec-name-out").text(recName);
    $("#rec-age-out").text(recAge);
    $("#rec-city-out").text(recCity);
    $("#rec-people-out").text(recpeople);
    // $("#rec-supplies-out").text(recSupplies);
    // $("#rec-lat-out").text(recLat);
    // $("#rec-lng-out").text(recLng);
    $("#rec-from-out").text(recFrom);
    $("#rec-to-out").text(recTo);

  });
});
