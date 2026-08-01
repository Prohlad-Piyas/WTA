var dark = false;

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (dark == false) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    document.getElementById("header").style.border = "2px solid white";
    document.getElementById("content").style.border = "2px solid white";
    document.getElementById("footer").style.border = "2px solid white";

    btn.innerHTML = "Switch to Light Mode";

    dark = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById("header").style.border = "2px solid black";
    document.getElementById("content").style.border = "2px solid black";
    document.getElementById("footer").style.border = "2px solid black";

    btn.innerHTML = "Switch to Dark Mode";

    dark = false;
  }
});
