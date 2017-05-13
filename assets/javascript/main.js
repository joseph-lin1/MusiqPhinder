// clicking submit displays search results and repositions elements
$("#button").on("click", function(){
  event.preventDefault();
  $("#search-box").addClass("move");
  $("#sectiontwo").css("display", "block")
  $(".logo").css({"height":"auto" , "width":"200px"})
  
  seatGeek();
})

//pop up 
$('#my_popup').popup({
  color: 'white',
  opacity: 1,
  transition: '0.3s',
  scrolllock: true
});

function seatGeek(){
  var queryURL = "https://api.seatgeek.com/2/events?per_page=30&page=10&geoip=true&range=10mi&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  var bandURL = "https://api.seatgeek.com/2/performers?q=red+hot&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  $.when(
    $.ajax({
      url: bandURL,
      method: "GET"
    }),
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  ).done(function(band, response){
    // console.log(band[0].performers);
    // console.log(response[0].events);

    // creates an array filtering only for concerts
    var concert = [];
    for (var i = 0; i < response[0].events.length; i++){
      if (response[0].events[i].type === "concert"){
        concert.push(response[0].events[i]);
      }
    }

    //displays only concerts to html table
    for (var i = 0; i < concert.length; i++){
      $("#table").append('<tr><td>' + concert[i].performers[0].name+
      '</td><td>' +concert[i].venue.name +
      '</td><td>' +concert[i].stats.lowest_price +
      '</td><td><a href="' +concert[i].url+ '">SeatGeek</a></td>');
    }
  })
}






// returns performer
// function band(){
//   var performer = $("#search-input").val().trim();
//   var bandURL = "https://api.seatgeek.com/2/performers?q="+performer+"&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
//   $.ajax({
//     url: bandURL,
//     method: "GET"
//   }).done(function(band){
//     // console.log(band);
//   })
// }



// function seatGeek(){
//   var queryURL = "https://api.seatgeek.com/2/events?per_page=30&page=10&geoip=true&range=10mi&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
//   return $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(response){

//     // creates an array filtering only for concerts
//     var concert = [];
//     for (var i = 0; i < response.events.length; i++){
//       if (response.events[i].type === "concert"){
//         concert.push(response.events[i]);
//       }
//     }

//     //displays only concerts to html table
//     for (var i = 0; i < concert.length; i++){
//       $("#table").append('<tr><td>' + concert[i].performers[0].name+
//       '</td><td>' +concert[i].venue.name +
//       '</td><td>' +concert[i].stats.lowest_price +
//       '</td><td><a href="' +concert[i].url+ '">SeatGeek</a></td>');
//     }
//   })
// }


















// database.ref().on("child_added", function(snapshot){
// $(".table").append('<tr><td class="tableName2">' + snapshot.val().name +
//   '</td><td class="tableDestination2">' + snapshot.val().destination +
//   '</td><td class="tableFrequency2 text-center">' + snapshot.val().frequency +
//   '</td><td class="tableNextTrain2 text-center">' + snapshot.val().nextArrival +
//   '</td><td class="tableMinutesTillTrain2 text-center">' + snapshot.val().tMinutesTillTrain);
// })


// $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response){
//       console.log(response); // this works
//       for (var i = 0; i < response.data.length; i++){
//         var animalDiv = $("<div>");
//         var p = $("<p>").text("Rating: " + response.data[i].rating);
//         var animalGif = $("<img>");
//         animalGif.addClass("gifImage");
//         // og source - still
//         animalGif.attr("src", response.data[i].images.original_still.url);
//         // still string
//         animalGif.attr("data-state", "still");
//         // animated gif
//         animalGif.attr("data-animate", response.data[i].images.original.url);
//         // still gif
//         animalGif.attr("data-still", response.data[i].images.original_still.url);

//         animalDiv.append(animalGif);
//         animalDiv.append(p);
//         $(".gifs").append(animalDiv);
//       }

//       $(".gifImage").on("click", function() {
//         if ($(this).attr("data-state") === "still") {
//           $(this).attr("src", $(this).attr("data-animate"));
//           $(this).attr("data-state", "animate");
//         }
//         else {
//           $(this).attr("src", $(this).attr("data-still"));
//           $(this).attr("data-state", "still");
//         }
//       })
//     })
//   })
// });