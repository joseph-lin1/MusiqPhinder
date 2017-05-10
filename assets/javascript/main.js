

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
  var performers = $(this).data("performers");
  var queryURL = "https://api.seatgeek.com/2/events?client_id=NzU0MjI0N3wxNDk0MzgxMTAzLjcy";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    console.log(response);
  })
}
