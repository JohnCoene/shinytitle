var page_title = document.title;

function changeTitle(ms){
  console.log("changed");
  setTimeout(function(){
    var active = $(".nav").find(".active");
    var name = active[0].childNodes[1].dataset.value;
    document.title = page_title + " - " + name;
  }, ms);
}

$(document).on('shiny:connected', function(event) {
  changeTitle(0)
});

$(".nav a").on("click", function(){
  changeTitle(100)
});