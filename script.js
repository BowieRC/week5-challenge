var mainEl = $(".main");
var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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
  saveBtn.attr("class", "btn saveBtn col-2 col-md-1");
  saveBtn.attr("aria-label", "save");
  saveBtn.attr("id", "sButton-" + i);

  var saveIcon = $("<i>");
  saveIcon.attr("class", "fas fa-save");
  saveIcon.attr("aria-hidden", "true");

  mainEl.append(hourBlockEl);
  hourBlockEl.append(hourNumberEl);
  hourBlockEl.append(textInputEl);
  saveBtn.append(saveIcon);
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

//print current day to header
var currentDayEl = $("#currentDay");
var currentDateEl = $("#currentDate");
currentDayEl.text(dayjs().format("dddd"));
currentDateEl.text(dayjs().format("DD/MM/YYYY"));

//check clicks
function checkClicks() {
  $("body").on("click", "#sButton-0", () => {
    localStorage.setItem("hour-0 event", $("#input-0").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-1", () => {
    localStorage.setItem("hour-1 event", $("#input-1").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-2", () => {
    localStorage.setItem("hour-2 event", $("#input-2").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-3", () => {
    localStorage.setItem("hour-3 event", $("#input-3").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-4", () => {
    localStorage.setItem("hour-4 event", $("#input-4").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-5", () => {
    localStorage.setItem("hour-5 event", $("#input-5").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-6", () => {
    localStorage.setItem("hour-6 event", $("#input-6").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-7", () => {
    localStorage.setItem("hour-7 event", $("#input-7").val());
    alertFlash();
  });
  $("body").on("click", "#sButton-8", () => {
    localStorage.setItem("hour-8 event", $("#input-8").val());
    alertFlash();
  });
  
}

function alertFlash(){
  var alertEl = $("<div>");
    alertEl.attr("class", "saveFlash");
    alertEl.text("Event set into Local Storage")
    setTimeout(function(){
      alertEl.remove();
    },3000);
  
  mainEl.append(alertEl);
}


$("window").load(run());

function run() {
  checkClicks();
}
