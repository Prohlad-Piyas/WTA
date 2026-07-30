function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;

  if (fname == "" || lname == "") {
    alert("Both fields must not be empty.");
    return false;
  }

  if (fname.length < 2 || lname.length < 2) {
    alert("Each field must have at least 2 characters.");
    return false;
  }

  return true;
}
