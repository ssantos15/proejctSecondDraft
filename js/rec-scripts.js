var receipients = {};

function Receipient(name, age, city, from, to) {
  this.name = name;
  this.age =age;
  this.city = city;
  this.from = from;
  this.to = to;
}

//Front-end ///////////////////////////////////////////////
$(document).ready(function(){
  $("#receipient").submit(function(event){
    event.preventDefault();

    var recName = $("#rec-name").val();
    var recAge = $("#rec-age").val();
    var recCity = $("#rec-city").val();
    // var recSupplies = $("#rec-supplies").val();
    // var recLat = parseInt($("#rec-lat").val());
    // var recLng = parseInt($("#rec-lng").val());
    var recFrom = $("#rec-from").val();
    var recTo = $("#rec-to").val();

    // console.log(recName);
    // console.log(recAddress);
    // console.log(recSupplies);
    // console.log(recLat);
    // console.log(recLng);
    // console.log(recFrom);
    // console.log(recTo);


    $("#rec-name-out").text(recName);
    $("#rec-age-out").text(recAge);
    $("#rec-city-out").text(recCity);
    // $("#rec-supplies-out").text(recSupplies);
    // $("#rec-lat-out").text(recLat);
    // $("#rec-lng-out").text(recLng);
    $("#rec-from-out").text(recFrom);
    $("#rec-to-out").text(recTo);

  });
});
