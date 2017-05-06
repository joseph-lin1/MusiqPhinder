$("#button").on("click", function(){
  event.preventDefault();
  $("#search-box").addClass("move");
  $("#sectiontwo").css("display", "block")
  $(".logo").css("display", "none")
})