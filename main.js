/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// 'use strict';
// (function() {
//   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
//   var apiKey = "";
//
//   });
// })();

//Returns User Key info
// var apiKey = "njgTsyWpHPAfCvTsi5unUMKE63seXuyUOk12Bqt7";
$("button").on("click",function(){


  var date = $("#date").val();
  var apiURL = "https://api.nasa.gov/planetary/apod?date="+date+"&api_key=njgTsyWpHPAfCvTsi5unUMKE63seXuyUOk12Bqt7";
  $.ajax({
    url: apiURL,
    //Work with the response
    success: function( response ) {
    console.log(response.hdurl); // server response
    $("img").attr("src",response.hdurl);
  },
    error: function(r){
    console.log(r); //server response
    }
  })
})
// $("https://apod.nasa.gov/apod/image/1710/Nucleosynthesis2_WikipediaCmglee_1080.jpg").on("click",function(){
//   $.get("http://data.consumerfinance.gov/api/views.json",function(r){
//     console.log(r)
//   });
// });

//
// $("https://api.nasa.gov/planetary/apod?api_key=njgTsyWpHPAfCvTsi5unUMKE63seXuyUOk12Bqt7").on("click",function(){
//   $.get("https://api.nasa.gov/planetary/apod?api_key=njgTsyWpHPAfCvTsi5unUMKE63seXuyUOk12Bqt7",function(r){
//     console.log(r)
//   });
// });


//specific url pull dates from input
// do three inputs
