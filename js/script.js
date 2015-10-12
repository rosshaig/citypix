//Don't start script until page has loaded
$(document).ready(function() {

//Prevent form submission
$( "#submit-btn" ).click(function( event ) {
    event.preventDefault();
  });

function cityChoice() {

//get value
var city = $( "#city-type").val();

//compare with images
//load correct image
if ((city == 'New York') || (city == 'New York City') || (city == 'NYC')) {
   $( "body" ).attr("class", "nyc" )
 } else if ((city == 'San Francisco') || (city == 'SF') || (city == 'Bay Area')) {
   $( "body" ).attr("class", "sf" )
 } else if ((city == 'Los Angeles') || (city == 'LA') || (city == 'LAX')) {
   $( "body" ).attr("class", "la" )
 } else if ((city == 'Austin') || (city == 'ATX')) {
   $( "body" ).attr("class", "austin" )
 } else if ((city == 'Sydney') || (city == 'SYD')) {
   $( "body" ).attr("class", "sydney" )
 } else  {
   $( "body" ).attr("class", "skyline" )

}
//reset field
$('#city-type').val('');

}

//user enters value
//user clicks submit button

$('#submit-btn').click(cityChoice);



});
