// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var mainEl = $(".main");
var workingHours = [9, 10, 11, 12, 13, 14, 15, 16];
// var workingHours = [1];
var saveButtons = [];

// load hour blocks
for (i = 0; i < workingHours.length; i++) {
  var hourBlockEl = $("<article>");
  hourBlockEl.attr("id", "hour-" + workingHours[i]);
  checkTime();

  var hourNumberEl = $("<div>");

  hourNumberEl.attr("class", "col-2 col-md-1 hour text-center py-3");
  if (workingHours[i] > 12) {
    hourNumberEl.text(workingHours[i] - 12);
    hourNumberEl.append("PM");
  } else {
    hourNumberEl.text(workingHours[i]);
    hourNumberEl.append("AM");
  }

  var textInputEl = $("<textarea>");
  textInputEl.attr("class", "col-8 col-md-10 description");
  textInputEl.number = i;

  var saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.attr("class", "btn saveBtn col-2 col-md-1");
  saveBtn.attr("aria-label", "save");
  saveBtn.attr("id", "sButton-" + i);
  saveButtons.push(saveBtn);
  saveBtn.number = i;

  var saveIcon = $("<i>");
  saveIcon.attr("class", "fas fa-save");
  saveIcon.attr("aria-hidden", "true");

  mainEl.append(hourBlockEl);
  hourBlockEl.append(hourNumberEl);
  hourBlockEl.append(textInputEl);
  hourBlockEl.append(saveBtn);
}

//check if past time block
function checkTime() {
  var currentHour = dayjs().format("HH");
  if (currentHour > workingHours[i]) {
    hourBlockEl.attr("class", "row time-block past");
  } else if (currentHour < workingHours[i]) {
    hourBlockEl.attr("class", "row time-block future");
  } else if ((currentHour = workingHours[i])) {
    hourBlockEl.attr("class", "row time-block present");
  }
}

//print current day to header
var currentDayEl = $("#currentDay");
currentDayEl.text(dayjs().format("dddd"));

//check clicks
function checkClicks() {
  for (i = 0; i < saveButtons.length; i++) {
    saveButtons[i].on("click", () => {
      console.log(saveButtons[i]);
    });
  }
}

$("window").load(run());

function run() {
  console.log("Site Loaded");

  // TODO: Add a listener for click events on the save button. This code should  use the id in the containing time-block as a key to save the user input in local storage.
  //HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  checkClicks("sButton-" + 0);

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  // HINT: How can the id attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
}
