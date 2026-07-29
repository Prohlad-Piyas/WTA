// Generate Employee Card
document.getElementById("generateBtn").onclick = function () {

    var name = document.getElementById("empName").value;
    var id = document.getElementById("empID").value;
    var dept = document.getElementById("department").value;
    var salary = document.getElementById("salary").value;
    var card = document.getElementById("employeeCard");

    // empty
    if (name == "" || id == "" || dept == "" || salary == "") {

        card.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
        card.style.backgroundColor = "";
        return;
    }

    // employee category
    var category;

    if (salary >= 50000) {
        category = "Senior Employee";
        card.style.backgroundColor = "lightgreen";
    } else {
        category = "Junior Employee";
        card.style.backgroundColor = "lightyellow";
    }

    //  Employee Card
    card.innerHTML =
        "<h2>Employee Card</h2>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Employee ID:</b> " + id + "</p>" +
        "<p><b>Department:</b> " + dept + "</p>" +
        "<p><b>Monthly Salary:</b> " + salary + "</p>" +
        "<p><b>Employee Category:</b> " + category + "</p>";
};


// Reset Button
document.getElementById("resetBtn").onclick = function () {

    document.getElementById("empName").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";

    document.getElementById("employeeCard").innerHTML = "";
    document.getElementById("employeeCard").style.backgroundColor = "";
};