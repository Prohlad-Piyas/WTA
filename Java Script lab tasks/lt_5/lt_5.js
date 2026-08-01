var button = document.getElementById("analyze");

button.addEventListener("click", function () {
  var text = document.getElementById("text").value.trim();

  if (text == "") {
    document.getElementById("result").innerHTML = "Please enter some text.";
    return;
  }

  var characters = text.length;

  var words = text.split(/\s+/).length;

  var reverse = text.split("").reverse().join("");

  document.getElementById("result").innerHTML =
    "<p>Total Characters: " +
    characters +
    "</p>" +
    "<p>Total Words: " +
    words +
    "</p>" +
    "<p>Reversed Text: " +
    reverse +
    "</p>";
});
