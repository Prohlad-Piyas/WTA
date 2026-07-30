var age = document.getElementById("age");
var message = document.getElementById("message");

age.addEventListener("input", function () {
  var a = Number(age.value);

  if (a < 40) {
    message.innerHTML =
      "To be a part of the community, you need to at least 40";
    message.style.color = "black";
  } else if (a >= 40 && a <= 50) {
    message.innerHTML = "You are the youngsters of this community";
    message.style.color = "black";
  } else if (a > 50) {
    message.innerHTML = "Top level members of the group";
    message.style.color = "red";
  } else {
    message.innerHTML = "";
  }
});
