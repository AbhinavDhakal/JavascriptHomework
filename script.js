//HOMEWORK STUFF

//Simple Interest Calculator

function calculateSI() {
  let principal = Number(document.getElementById("principalSI").value);
  let rate = Number(document.getElementById("rateSI").value);
  let time = Number(document.getElementById("timeSI").value);

  let simpleInterest = (principal * rate * time) / 100;

  let result = document.getElementById("resultSI");

  result.innerHTML = `Result: <br> The Simple Interest <br>  is <strong> ${simpleInterest} </strong>`;
}

//Area and Perimeter of Rectangle Calulator

function calculateAP() {
  let length = Number(document.getElementById("lengthAP").value);
  let breadth = Number(document.getElementById("breadthAP").value);

  let Area = length * breadth;
  let Perimeter = 2 * (length + breadth);

  let result = document.getElementById("resultAP");

  result.innerHTML = `Result: <br> The Area is <strong>${Area}</strong> <br> & <br> Perimeter is <strong>${Perimeter}</strong>`;
}

//Area of Circle Calculator

function calculateAC() {
  let radius = Number(document.getElementById("radiusAC").value);

  let Area = (22 / 7) * radius ** 2;

  let result = document.getElementById("resultAC");

  result.innerHTML = `Result: <br>The Area <br> of the Circle <br> is <strong>${Area} </strong>`;
}

//NON HOMEWORK STUFF
function hideall() {
  document.getElementById("SimpleInterest").style.display = "none";
  document.getElementById("AreaPerimeter").style.display = "none";
  document.getElementById("AreaCircle").style.display = "none";
}

hideall();
document.getElementById("SI").checked = true;
document.getElementById("SimpleInterest").style.display = "flex";

function showCalc(selected) {
  hideall();
  document.getElementById(selected).style.display = "flex";
}
