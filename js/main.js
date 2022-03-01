// o'rtacha tezlik

var elWalkSpeed = 3.6;
var elBikeSpeed = 20.1;
var elCarSpeed = 70;
var elPlaneSpeed = 800;

// user input data

var elSayoxat = document.querySelector(".sayoxat");
var elForm = document.querySelector("form");
var elUserInput  = document.querySelector(".form-control");
var elBtn = document.querySelector(".button");
var elResultWalk = document.querySelector(".walk__time");
var elResultBike = document.querySelector(".bike__time");
var elResultCar = document.querySelector(".car__time");
var elResultPlane = document.querySelector(".plane__time");


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    elWalkTime = Math.floor(elUserInput.value / elWalkSpeed);
    elBikeTime = Math.floor(elUserInput.value / elBikeSpeed);
    elCarTime = Math.floor(elUserInput.value / elCarSpeed);
    elPlaneTime = Math.floor(elUserInput.value / elPlaneSpeed);
    
    elResultWalk.textContent = elWalkTime + " hours " + Math.round((elUserInput.value / elWalkSpeed - elWalkTime) * 60) + " minutes ";
    elResultBike.textContent = elBikeTime + " hours " + Math.round((elUserInput.value / elBikeSpeed - elBikeTime) * 60) + " minutes ";
    elResultCar.textContent = elCarTime + " hours " + Math.round((elUserInput.value / elCarSpeed - elCarTime) * 60) + " minutes ";
    elResultPlane.textContent = elPlaneTime + " hours " + Math.round((elUserInput.value / elPlaneSpeed - elPlaneTime) * 60) + " minutes ";
})