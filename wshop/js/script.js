var feedbackBtn = document.querySelector(".feedback");

var feedbackPopup = document.querySelector(".modal-feedback-form");
var overleyPopup = document.querySelector(".modal-overley");
var modalClose = feedbackPopup.querySelector(".modal-close");

var form = feedbackPopup.querySelector("form");
var userName = feedbackPopup.querySelector("[name=name]");
var eMail = feedbackPopup.querySelector("[name=e-mail]");

var storage = localStorage.getItem("userName");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-show");
  overleyPopup.classList.add("overley-show");

  if (storage) {
    userName.value = storage;
    eMail.focus();
  } else {
    userName.focus();
  }

});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  overleyPopup.classList.remove("overley-show");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !eMail.value) {
    event.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    // alert(eMail.value);
    // alert(userName.value);
  } else {
    localStorage.setItem("userName", userName.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      overleyPopup.classList.remove("overley-show");
    }
  }
});


// google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.939147, lng: 30.320669},
    zoom: 17,
    scrollwheel: false
  });
  var markerImage = new google.maps.MarkerImage(
    'img/map-marker.png',
    new google.maps.Size(231,190),
    new google.maps.Point(0,0),
    new google.maps.Point(50,190)
);
  var marker = new google.maps.Marker({
    position: {lat: 59.938837, lng: 30.323069},
    icon:  markerImage,
    map: map
  });
}
// google.maps.event.addDomListener(window, 'load', initMap);
