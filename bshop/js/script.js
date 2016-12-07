var loginLink = document.querySelector(".login");

var loginPopup = document.querySelector(".modal-login");
var overleyPopup = document.querySelector(".modal-overley");
var loginClose = loginPopup.querySelector(".modal-close");

var form = loginPopup.querySelector("form");
var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password]");

var storage = localStorage.getItem("login");

loginLink.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.classList.add("modal-show");
  overleyPopup.classList.add("overley-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }

});

loginClose.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
  overleyPopup.classList.remove("overley-show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
      overleyPopup.classList.remove("overley-show");
    }
  }
});



var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
  overleyPopup.classList.add("overley-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-error");
  overleyPopup.classList.remove("overley-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overleyPopup.classList.remove("overley-show");
    }
  }
});
