
//Front-end ///////////////////////////////////////////////
$(document).ready(function(){
  $("#receipient").submit(function(event){
    event.preventDefault();

    var recName = $("#rec-name").val();
    var recAddress = $("#rec-address").val();
    var recSupplies = $("#rec-supplies").val();

    console.log(recName);
    console.log(recAddress);
    console.log(recSupplies);

    $("#rec-name-out").text(recName);
    $("#rec-address-out").text(recAddress);
    $("#rec-supplies-out").text(recSupplies);

  });
});
