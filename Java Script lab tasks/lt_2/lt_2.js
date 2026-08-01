var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

var index = 0;

var slider = document.getElementById("slider");

document.getElementById("next").addEventListener("click", function () {
  index++;

  if (index == images.length) {
    index = 0;
  }

  slider.src = images[index];
});

document.getElementById("prev").addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  slider.src = images[index];
});

setInterval(function () {
  index++;

  if (index == images.length) {
    index = 0;
  }

  slider.src = images[index];
}, 3000);
