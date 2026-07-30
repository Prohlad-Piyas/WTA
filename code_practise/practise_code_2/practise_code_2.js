var username = document.getElementById("username");

username.addEventListener("input", function () {
  username.value = username.value.toUpperCase();
});
