/*$(document).ready(function(){
    var moment = moment();

    console.log(moment);
    console.log(moment.date());
    console.log(moment.hour());
    console.log(moment.format());
    
    console.log(moment.format("MMMM DD"));
    console.log(moment.format("H"));
    console.log(moment.calendar());
    var date = moment.format("dddd, MMMM DD");
    
    $("#currentDay").text(date);
});*/

var moment = moment();

//console.log(moment);
//console.log(moment.date());
//console.log(moment.hour());
//console.log(moment.format());

//console.log(moment.format("MMMM DD"));
//console.log(moment.format("H"));
//console.log(moment.calendar());
var date = moment.format("dddd, MMMM DD");

$("#currentDay").text(date);

setInterval(checkTime, 500);

//var

var textareaValue = $("textarea");
console.log(textareaValue);

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

function checkTime() {
  var recent = parseInt(moment.format("H"));
  //console.log(recent);
  var hour_list = $(".row");
  ///console.log(hour_list);
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
    // var real = $.attr("id");
    //console.log(real);
  });
}

var $buttons = $(".saveBtn");
//console.log(textareaValue[1]);
//var text = textareaValue[0].value;
//console.log($buttons);

$buttons.on("click", function (e) {
  e.preventDefault();

  ids = this.id;
  var text;

  if (ids === "nine") {
    text = textareaValue[0].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "ten") {
    text = textareaValue[1].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
    //console.log(text);
  } else if (ids === "eleven") {
    text = textareaValue[2].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "twelve") {
    text = textareaValue[3].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "one") {
    text = textareaValue[4].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "two") {
    text = textareaValue[5].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "three") {
    text = textareaValue[6].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "four") {
    text = textareaValue[7].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  } else if (ids === "five") {
    text = textareaValue[8].value;
    storeVal[ids] = text;
    console.log(storeVal[ids]);
  }

  localStorage.setItem("storeVal", JSON.stringify(storeVal));
  // var value =
});

var valStored = JSON.parse(localStorage.getItem("storeVal"));
console.log(valStored);


