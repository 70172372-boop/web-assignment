let studentName = "Azan";
let age = 21;
let isStudent = true;
let subjects = ["Web Engineering", "DBMS", "DS"];

let student = {
    name: "Azan",
    age: 21,
    semester: 5
};

document.getElementById("studentName").innerHTML = studentName;
document.getElementById("age").innerHTML = age;
document.getElementById("isStudent").innerHTML = isStudent;
document.getElementById("subjects").innerHTML = subjects;
document.getElementById("student").innerHTML = student.name;

const showSummary = () => {
    document.getElementById("summary").innerHTML =
        "Student Name: " + studentName + ", Age: " + age;
};

document.getElementById("summaryButton").addEventListener("click", showSummary);
