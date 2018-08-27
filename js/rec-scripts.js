var receipients = {};

function Receipient(name, people, city, from, to, message) {
  this.name = name;
  this.people= people;
  this.city = city;
  this.from = from;
  this.to = to;
  this.message = message;
}




//Front-end ///////////////////////////////////////////////
$(document).ready(function(){
  var cellFormat = $(".rec-list:first").html();
  console.log(cellFormat);

  $("#receipient").submit(function(event){
    event.preventDefault();

    var recName = $("#rec-name").val().toUpperCase();
    var recAge = $("#rec-age").val();
    var recPeople = $("#rec-people").val();
    var recCity = $("#rec-city").val();
    // var recSupplies = $("#rec-supplies").val();
    // var recLat = parseInt($("#rec-lat").val());
    // var recLng = parseInt($("#rec-lng").val());
    var recFrom = $("#rec-from").val();
    var recTo = $("#rec-to").val();
    var recMessage = $("#rec-message").val();

    // console.log(recName);
    // console.log(recAddress);
    // console.log(recSupplies);
    // console.log(recLat);
    // console.log(recLng);
    // console.log(recFrom);
    // console.log(recTo);

    //create Receipient instance based on the input.
    // var recInstance = new Receipient (recName, recPeople, recCity,recFrom,recTo,recMessage);

    $(".rec-list").append(cellFormat);

    $(".rec-name-out:last").text(recName);
    $(".rec-age-out:last").text(recAge);
    $(".rec-city-out:last").text(recCity);
    $(".rec-people-out:last").text(recPeople);
    // $(".rec-supplies-out").text(recSupplies);
    // $(".rec-lat-out").text(recLat);
    // $(".rec-lng-out").text(recLng);
    $(".rec-from-out:last").text(recFrom);
    $(".rec-to-out:last").text(recTo);
    $(".rec-message-out:last").text(recMessage);

    $("#receipient")[0].reset();
  });
});
