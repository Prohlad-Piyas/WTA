var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("success").innerText = "";

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var phone = document.getElementById("phone").value;

  var valid = true;

  if (name == "") {
    document.getElementById("nameError").innerText = "Enter Full Name";
    valid = false;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("emailError").innerText = "Invalid Email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (password != confirm) {
    document.getElementById("confirmError").innerText =
      "Passwords do not match";
    valid = false;
  }

  if (isNaN(phone) || phone == "") {
    document.getElementById("phoneError").innerText =
      "Phone must contain only digits";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").innerText = "Registration Successful!";
  }
});
