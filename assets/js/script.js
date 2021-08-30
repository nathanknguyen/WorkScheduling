// Bring in all the elements from html by creating variables
var timeEl = document.querySelector("#currentDay");

// pull everything out html timeblocks
var row9El = document.querySelector("#row9");
var plan9El = document.querySelector("#plan9")
var save9El = document.querySelector("#save9");
var row10El = document.querySelector("#row10");
var plan10El = document.querySelector("#plan10")
var save10El = document.querySelector("#save10");
var row11El = document.querySelector("#row11");
var plan11El = document.querySelector("#plan11")
var save11El = document.querySelector("#save11");
var row12El = document.querySelector("#row12");
var plan12El = document.querySelector("#plan12")
var save12El = document.querySelector("#save12");
var row1El = document.querySelector("#row1");
var plan1El = document.querySelector("#plan1")
var save1El = document.querySelector("#save1");
var row2El = document.querySelector("#row2");
var plan2El = document.querySelector("#plan2")
var save2El = document.querySelector("#save2");
var row3El = document.querySelector("#row3");
var plan3El = document.querySelector("#plan3")
var save3El = document.querySelector("#save3");
var row4El = document.querySelector("#row4");
var plan4El = document.querySelector("#plan4")
var save4El = document.querySelector("#save4");
var row5El = document.querySelector("#row5");
var plan5El = document.querySelector("#plan5")
var save5El = document.querySelector("#save5");

// function to display the current day and time and set interval  to check every second
function displayDay() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}
setInterval(displayDay, 1000);

// grab current hour from moment in 24 hour format, so 1pm will be 13 and so forth
var currentHour = moment().format("H");
  