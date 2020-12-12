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

window.onload = setInterval(checkTime, 60000);

//var



function checkTime() {
  var recent =parseInt( moment.format("H") );
  //console.log(recent);
  var hour_list = $(".row");
  ///console.log(hour_list);
  hour_list.each(function () {
    var $value = $(this);
    var $textarea = $value.find('textarea');
    var real = parseInt($textarea.attr("id"));

    if(recent == real)
    {
        $textarea.addClass('present') ;
    }else if (recent > real)
    {
        $textarea.addClass('past') ;
    }else if (recent < real){
        $textarea.addClass('future') 
    }
   // var real = $.attr("id");
    //console.log(real);
  });
}
