//Display current data and time
$("#currentDay").text(moment().format("HH:mm, MMMM Do YYYY"));

function timeTracker() {
  var currentTime = moment().hour();

  if (rowTime < currentTime) {
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
  } else if (currentTime === rowTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
}

timeTracker();
