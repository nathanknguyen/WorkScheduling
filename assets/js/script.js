const moment = window.moment;
let timeblocks = document.getElementById("timeblocks");
console.log(moment().hour());
let hour = 8;
for (let i = 0; i < 8; i++) {
    hour++;
    let div = document.createElement("div");
    div.classList.add("time-block");
    
    if (hour == 13) {
        hour = 1;
    }
    div.innerText = hour;
    hour++;
    if (moment().hour() == i) {
        div.classList.add("present")
        //present, red
    } else if (i < moment().hour()) {
        //before, gray
        div.classList.add("past")
    } else {
        //after, green
        div.classList.add("future")
    }
    div.id = i;
    div.innerText = "textblock";
    timeblocks.appendChild(div);

}