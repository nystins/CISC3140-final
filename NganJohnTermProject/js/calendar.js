"use strict";





var thisDay = new Date(2020, 6, 6);

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//generate table for calendar
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}



function calCaption(calDate) {
   
    var monthName = ["January", "February", "March", "April", "May", "June" , "July", "August", "September", "October", "November", "December"];

   
    var thisMonth = calDate.getMonth();

   
    var thisYear = calDate.getFullYear();

     
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}




function calWeekdayRow() {
    
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var rowHTML = "<tr>";
    
    
    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='weekdays'>" + dayName[i] +"</th>";
    }

    
    rowHTML += "</tr>";
    return rowHTML;
}




function daysInMonth(calDate) {
    
    var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();
    
    
    if (thisYear % 4 === 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    }

    
    return dayCount[thisMonth];
}




//table rows for each day of the month
function calDays(calDate) {
    //starting day
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay(); 
    //create html code for easy access to <tr>
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }
    //input each day
    var totalDays = daysInMonth(calDate);

    //create variable for highlight day
    var highlightDay = calDate.getDate();
    for (var i = 1; i < totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay === 0){
        	htmlCode += "<tr>";
        }

        if(i === highlightDay){
        	htmlCode += "<td class='dates' id='today'>" + i + dayEvent[i] + "</td>";
        }
        else{
        	htmlCode += "<td class='dates'>" + i + dayEvent[i] + "</td>";
        }

        if (weekDay === 6){
        	htmlCode += "</tr>";
        }
    }
    //return days to calendar
    return htmlCode;
}