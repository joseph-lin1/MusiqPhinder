

$("#button").on("click", function(){
  event.preventDefault();
  $("#search-box").addClass("move");
  $("#sectiontwo").css("display", "block")
  $(".logo").css({"height":"auto" , "width":"200px"})
  
  seatGeek();
})

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Qfv1suz3Z2XxzUENmXjYxN59XsuJPA2j",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});


//pop up 
$('#my_popup').popup({
  color: 'white',
  opacity: 1,
  transition: '0.3s',
  scrolllock: true
});

function seatGeek(){
  var performer = $("#search-input").val().trim();
  // var queryURL = "https://api.seatgeek.com/2/performers?q="+performer+"&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  var queryURL = "https://api.seatgeek.com/2/events?geoip=true&range=50mi&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  // var queryURL = "https://api.seatgeek.com/2/events?&geoip=true&range=5mi&client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    // console.log(response.events[0].performers[0].name);
    // console.log(response.events[0].venue.name);
    // console.log(response.events[0].venue.address);
    // console.log(response.events[0].venue.city);
    // console.log(response.events[0].venue.state);
    // console.log(response.events[0].stats.lowest_price);
    // console.log(response.events);
    // console.log(response.events[0].performers.type);
    // var performer = $("#search-input").val().trim();

    // this is for geo ip and mile radius

    for (var i = 0; i < response.events.length; i++){
      if (response.events[i].performers.type == "band") {
        $("#table").append('<tr><td>' + response.events[i].performers[0].name+
        '</td><td>' +response.events[i].venue.name +
        '</td><td>' +response.events[i].stats.lowest_price +
        '</td><td><a href="' +response.events[i].url+ '">SeatGeek</a></td>');
      }
    }

    // this one is for performer query
    // console.log(response.performers[0].name);
    // console.log(response.performers);
    // for (var i = 0; i < response.performers.length; i++){
    //   $("#table").append('<tr><td>' + response.performers[i].name);
       // '</td><td>' +response.events[i].venue.name +
       // '</td><td>' +response.events[i].stats.lowest_price +
       // '</td><td>' +response.events[i].url);
    // }

  })
}


















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