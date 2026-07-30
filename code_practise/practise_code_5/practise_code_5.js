var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lavender",
    "lightyellow",
    "orange",
  ];

  var random = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[random];
});
