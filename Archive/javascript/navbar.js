
// var d = new Date(milliseconds);

// document.getElementById("date").innerHTML = Date();
// document.getElementById("date").innerHTML = d;


function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var x = "Local time is ";
    if (minutes < 10){
        minutes = "0" + minutes
    }

    var timeString = x + hours + ":" + minutes + " ";
    if(hours > 11){
        timeString += "PM";
    } else {
        timeString += "AM";
    }

    document.getElementById('date').innerHTML = timeString;
}
setInterval(updateTime, 1000);
