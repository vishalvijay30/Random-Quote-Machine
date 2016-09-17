$(document).ready(function() {
  $(".next-button").on("click", function() {
    $.getJSON("http://quotes.rest/qod.json", function(json) {
      //console.log(json);
      $(".quote-container").html(
        "<p style=font-size:20px>" + json.contents.quotes[0].quote + "</p>" + "<p style=text-align:right> <br>" + json.contents.quotes[0].author + "</p>"
      );
    });
  });
});
