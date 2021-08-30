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

// determine if hour has passed to display correct color in each block
if (9 < currentHour) {
    row9El.classList = "past";
} else if (9 == currentHour) {
    row9El.classList = "present";
} else {
    row9El.classList = "future";
}
if (10 < currentHour) {
    row10El.classList = "past";
} else if (10 == currentHour) {
    row10El.classList = "present";
} else {
    row10El.classList = "future";
}
if (11 < currentHour) {
    row11El.classList = "past";
} else if (11 == currentHour) {
    row11El.classList = "present";
} else {
    row11El.classList = "future";
}
if (12 < currentHour) {
    row11El.classList = "past";
} else if (12 == currentHour) {
    row11El.classList = "present";
} else {
    row12El.classList = "future";
}
if (13 < currentHour) {
    row1El.classList = "past";
} else if (13 == currentHour) {
    row1El.classList = "present";
} else {
    row1El.classList = "future";
}
if (14 < currentHour) {
    row2El.classList = "past";
} else if (14 == currentHour) {
    row2El.classList = "present";
} else {
    row2El.classList = "future";
}
if (15 < currentHour) {
    row3El.classList = "past";
} else if (15 == currentHour) {
    row3El.classList = "present";
} else {
    row3El.classList = "future";
}
if (16 < currentHour) {
    row4El.classList = "past";
} else if (16 == currentHour) {
    row4El.classList = "present";
} else {
    row4El.classList = "future";
}
if (17 < currentHour) {
    row11El.classList = "past";
} else if (17 == currentHour) {
    row5El.classList = "present";
} else {
    row5El.classList = "future";
}

// Save item in local storage
function showResponse9(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan9AM", plan9El.value);
}

function showResponse10(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan10AM", plan10El.value);
}

function showResponse11(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan11AM", plan11El.value);
}

function showResponse12(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan12pm", plan12El.value);
}

function showResponse13(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan1pm", plan1El.value);
}

function showResponse14(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan2pm", plan2El.value);
}

function showResponse15(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan3pm", plan3El.value);
}

function showResponse16(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan4pm", plan4El.value);
}

function showResponse17(event) {
    // Prevent default action
    event.preventDefault();
    localStorage.setItem("plan5pm", plan5El.value);
}






  