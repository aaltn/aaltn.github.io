var formShowBtn = document.querySelector(".form-show");
var searchForm = document.querySelector(".search-form");

searchForm.classList.remove("modal-show");
searchForm.classList.add("modal-close");

formShowBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (searchForm.classList.contains("modal-show")) {
    searchForm.classList.remove("modal-show");
    searchForm.classList.remove("modal-error");
    searchForm.classList.add("modal-close");
  } else {
    searchForm.classList.remove("modal-close");
    searchForm.classList.add("modal-show");
  }
});

// form.addEventListener("submit", function(event) {
//   if (!userName.value || !eMail.value) {
//     event.preventDefault();
//     searchForm.classList.remove("modal-error");
//     searchForm.offsetWidth = searchForm.offsetWidth;
//     searchForm.classList.add("modal-error");
//     // alert(eMail.value);
//     // alert(userName.value);
//   } else {
//     localStorage.setItem("userName", userName.value);
//   }
// });

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (searchForm.classList.contains("modal-show")) {
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");
    }
  }
});


// google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 34.8543734, lng: -111.8301578},
    zoom: 9,
    scrollwheel: false
  });
//   var markerImage = new google.maps.MarkerImage(
//     'img/map-marker.png',
//     new google.maps.Size(231,190),
//     new google.maps.Point(0,0),
//     new google.maps.Point(50,190)
// );
  var marker = new google.maps.Marker({
    position: {lat: 34.8543734, lng: -111.8301578},
    // icon:  markerImage,
    map: map
  });

  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

}
// google.maps.event.addDomListener(window, 'load', initMap);
