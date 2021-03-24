$(document).ready(function () {
  // $('#go').click(function(){
  //     // event.preventDefault();
  //     console.log("button clicked");

  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/group?id=2179537,2193732,2192362,2190324,2208032&appid=5cf8b5a934f7eb13eb77b21ff957d3e6",
    type: "GET",
    dataType: "JSON",
    success: function (result, status, xhr) {
      console.log(result);
      
      for (let i = 0; i < result.list.length; i++) {
        $("#results").append(
          '<div class="card">' +
            '<img src="https://openweathermap.org/img/wn/'+ result.list[i].weather[0].icon +'@2x.png" class="card-img-top" style= "width: 50px height:50px" alt="weather icon" />' +
            '<div class="card-body">' +
            '<h1 class="card-title text-center text-light">' + Math.round(result.list[i].main.temp - 273.15) +'<sup>&deg;c</sup></h1>' +
            '<h3 class="card-title text-center">' +result.list[i].name + ', ' +result.list[i].sys.country +'</h3>' +
            '<h4 class="card-title text-center">'+ result.list[i].weather[0].description+'</h4>' +
            '<p class="card-text"> </p>' +
            '</div> </div>'
        );
      }
    },
    error: function (xhr, status, error) {
      console.log(
        "Status: " +
          status +
          "Error: " +
          error +
          "XHR Status text: " +
          xhr.statusText +
          "XHR Status: " +
          xhr.status
      );
    },
  });
  // })
});
