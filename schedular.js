// get moment object
var moment = moment();

var date = moment.format("dddd, MMMM DD");

// put the date in the web browser
$("#currentDay").text(date);

//set the time Interval to check for each hour
setInterval(checkTime, 500);

// Get the text area to display the text
var textareaValue = $("textarea");

var storeVal = {
  nine: "",
  ten: "",
  eleven: "",
  twelve: "",
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
};

// function to set the right colour for each task
function checkTime() {
  var recent = parseInt(moment.format("H"));

  var hour_list = $(".row");

  hour_list.each(function () {
    var $value = $(this);
    var $textarea = $value.find("textarea");
    var real = parseInt($textarea.attr("id"));

    if (recent == real) {
      $textarea.addClass("present");
    } else if (recent > real) {
      $textarea.addClass("past");
    } else if (recent < real) {
      $textarea.addClass("future");
    }
  });
}

var $buttons = $(".saveBtn");

// event listner to get the input in the text area and save it
$buttons.on("click", function (e) {
  e.preventDefault();

  ids = this.id;

  if (ids === "nine") {
    storeVal[ids] = textareaValue[0].value;
  } else if (ids === "ten") {
    storeVal[ids] = textareaValue[1].value;
  } else if (ids === "eleven") {
    storeVal[ids] = textareaValue[2].value;
  } else if (ids === "twelve") {
    storeVal[ids] = textareaValue[3].value;
  } else if (ids === "one") {
    storeVal[ids] = textareaValue[4].value;
  } else if (ids === "two") {
    storeVal[ids] = textareaValue[5].value;
  } else if (ids === "three") {
    storeVal[ids] = textareaValue[6].value;
  } else if (ids === "four") {
    storeVal[ids] = textareaValue[7].value;
  } else if (ids === "five") {
    storeVal[ids] = textareaValue[8].value;
  }

  localStorage.setItem("storeVal", JSON.stringify(storeVal));
});

var valStored = JSON.parse(localStorage.getItem("storeVal"));

//get the text from the local storage and save it
textareaValue[0].value = valStored.nine;
textareaValue[1].value = valStored.ten;
textareaValue[2].value = valStored.eleven;
textareaValue[3].value = valStored.twelve;
textareaValue[4].value = valStored.one;
textareaValue[5].value = valStored.two;
textareaValue[6].value = valStored.three;
textareaValue[7].value = valStored.four;
textareaValue[8].value = valStored.five;
