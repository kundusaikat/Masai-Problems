// fill in javascript code here

const name1 = document.querySelector("#name");
const employeeID = document.querySelector("#employeeID");
const department = document.querySelector("#department");
const experience = document.querySelector("#exp");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mbl");
document.querySelector("form").addEventListener("submit", myFun);

function myFun(event) {
  event.preventDefault();

  const td1 = document.createElement("td");
  td1.innerText = name1.value;

  const td2 = document.createElement("td");
  td2.innerText = employeeID.value;

  const td3 = document.createElement("td");
  td3.innerText = department.value;

  const td4 = document.createElement("td");
  td4.innerText = experience.value;

  const td5 = document.createElement("td");
  td5.innerText = email.value;

  const td6 = document.createElement("td");
  td6.innerText = mobile.value;

  const td7 = document.createElement("td");
  let flag;
  let exp = +experience.value;
  if (exp > 5) {
    flag = "Senior";
  } else if (exp >= 2) {
    flag = "Junior";
  } else {
    flag = "Fresher";
  }
  td7.innerText = flag;

  const td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.addEventListener("click", myDelete);

  tr = document.createElement("tr");
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(tr);
}

function myDelete(event) {
  event.target.parentNode.remove();
}
