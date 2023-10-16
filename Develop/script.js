var mainEl = $(".main");
var workingHours = [9, 10, 11, 12, 13, 14, 15, 16];

// load hour blocks
for (i = 0; i < workingHours.length; i++) {
  var hourBlockEl = $("<article>");
  hourBlockEl.attr("id", "hour-" + i);
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
  textInputEl.attr("id", "input-" + i);
  textInputEl.attr("class", "col-8 col-md-10 description");
  textInputEl.text(localStorage.getItem("hour-" + i + " event"));
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
  var currentDay = dayjs().format("DD/MM/YYYY");
  if (currentHour > workingHours[i]) {
    hourBlockEl.attr("class", "row time-block past");
  } else if (currentHour < workingHours[i]) {
    hourBlockEl.attr("class", "row time-block future");
  } else if ((currentHour = workingHours[i])) {
    hourBlockEl.attr("class", "row time-block present");
  }
}