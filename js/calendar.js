let date = new Date();
let month = date.getMonth() + 1; 
let monthForWeek = date.getMonth();
const currentMonth = date.getMonth() + 1; 
let todayInMonth = '0'+ month;
let todayInMonth2 = JSON.stringify(month);
let year = date.getFullYear(); 
let currentDay = date.getDay();
let dayOfWeek= new Date(year, monthForWeek, 0).getDay() + 1 ;  
let dayOfWeekNextMonth= new Date(year, monthForWeek+1, 0).getDay() + 1 ; 
let dayOfWeekNextMonth1= new Date(year, monthForWeek+2, 0).getDay() + 1 ;  
let dayOfWeekNextMonth2= new Date(year, monthForWeek+3, 0).getDay() + 1 ;  
let dayOfWeekNextMonth3= new Date(year, monthForWeek+4, 0).getDay() + 1 ;  
const currentYear = date.getFullYear(); 
let day = date.getDate();
let daysInCurrentMonth =  new Date(year, month, 0).getDate();    
let daysInNextMonth = new Date(year, month + 1, 0).getDate();
let daysInNextMonth1 = new Date(year, month + 2, 0).getDate();
let daysInNextMonth2 = new Date(year, month + 3, 0).getDate();
let daysInNextMonth3 = new Date(year, month + 4, 0).getDate();
let nextMonth = document.getElementById('month');
let nextMonth1 = document.getElementById('month1');
let nextMonth2 = document.getElementById('month2');
let nextMonth3 = document.getElementById('month3');
let monthName;
let val;
let selectedDates = [];
let overlay = document.getElementById('manage-slots-overlay');

let calendarBlockContainer = document.querySelector('.calendar-blocks')
let showSelectedDates=document.getElementById('selected-dates-show')
let i;
let calendarBlockNextMonthContainer = document.querySelector('.calendar-blocks-next-month')
let calendarBlockNextMonthContainer1 = document.querySelector('.calendar-blocks-next-month1')
let calendarBlockNextMonthContainer2 = document.querySelector('.calendar-blocks-next-month2')
let calendarBlockNextMonthContainer3 = document.querySelector('.calendar-blocks-next-month3')
let monthFilter = document.getElementById('monthFilter')
let max = year+"-12";
let min = year+ "-01";
monthFilter.setAttribute("max", max);
monthFilter.setAttribute("min", min);
monthFilter.setAttribute("value", `${currentYear}-${currentMonth}`);


const moze = [
    {
        date: "05-08-2020",
        slobodniTermini: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"],
        zauzetiTermini: ["08:00", "09:00", "16:00"]
    },
    {
        date: "06-08-2020",
        slobodniTermini: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"],
        zauzetiTermini: ["08:00", "09:00", "16:00"]
    },
    {
        date: "07-08-2020",
        slobodniTermini: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"],
        zauzetiTermini: ["08:00", "09:00", "16:00"]
    },
    {
        date: "08-08-2020",
        slobodniTermini: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"],
        zauzetiTermini: ["08:00", "09:00", "16:00"]
    },
    {
        date: "09-08-2020",
        slobodniTermini: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"],
        zauzetiTermini: ["08:00", "09:00", "16:00"]
    }
];

let printDays = () => {

    for(i=1; i<dayOfWeek; i++) {
        calendarBlockContainer.innerHTML+=`<div class="calendar-block-unavailable"></div>`;
        }
    for(i=1; i<dayOfWeekNextMonth; i++) {
        calendarBlockNextMonthContainer.innerHTML+=`<div class="calendar-block-unavailable"></div>`;
        }
    for(i=1; i<dayOfWeekNextMonth1; i++) {
        calendarBlockNextMonthContainer1.innerHTML+=`<div class="calendar-block-unavailable"></div>`;
        }

    for (i=1; i<=daysInCurrentMonth; i++) {
    calendarBlockContainer.innerHTML+=`<div class="calendar-block calendar-block-current-month" selectDate="${i}-${month}-${year}" onClick='selectDateCurrentMonth(this)'><span class="day-number">${i}</span><div class="*slots-booked*"></div><p class="price-dollars"></p></div>`;
    }

    for (i=1; i<=daysInNextMonth ; i++) {
        calendarBlockNextMonthContainer.innerHTML+=`<div class="calendar-block" selectDate="${i}-${month+1}-${year}" onClick='selectDate(this)'><span class="day-number">${i}</span><div class="*slots-booked*"></div><p class="price-dollars"></p></div>`;
    }

    for (i=1; i<=daysInNextMonth1 ; i++) {
        calendarBlockNextMonthContainer1.innerHTML+=`<div class="calendar-block" selectDate="${i}-${month+2}-${year}" onClick='selectDate(this)'><span class="day-number">${i}</span><div class="*slots-booked*"></div><p class="price-dollars"></p></div>`;
    }



    

}



let nextMonthName = () => {
    if (monthName == "January") {
        nextMonth.innerHTML="February"
        nextMonth1.innerHTML="March"
        nextMonth2.innerHTML="April"
        nextMonth3.innerHTML="May"
    }
    else if (monthName == "February") {
        nextMonth.innerHTML="March"
        nextMonth1.innerHTML="April"
        nextMonth2.innerHTML="May"
        nextMonth3.innerHTML="June"
    }
    else if (monthName == "March") {
        nextMonth.innerHTML="April"
        nextMonth1.innerHTML="May"
        nextMonth2.innerHTML="June"
        nextMonth3.innerHTML="July"
    }
    else if (monthName == "April") {
        nextMonth.innerHTML="May"
        nextMonth1.innerHTML="June"
        nextMonth2.innerHTML="July"
        nextMonth3.innerHTML="August"
    }
    else if (monthName == "May") {
        nextMonth.innerHTML="June"
        nextMonth1.innerHTML="July"
        nextMonth2.innerHTML="August"
        nextMonth3.innerHTML="September"
    }
    else if (monthName == "June") {
        nextMonth.innerHTML="July"
        nextMonth1.innerHTML="August"
        nextMonth2.innerHTML="September"
        nextMonth3.innerHTML="October"
    }
    else if (monthName == "July") {
        nextMonth.innerHTML="August"
        nextMonth1.innerHTML="September"
        nextMonth2.innerHTML="October"
        nextMonth3.innerHTML="November"
    }
    else if (monthName == "August") {
        nextMonth.innerHTML="September"
        nextMonth1.innerHTML="October"
        nextMonth2.innerHTML="November"
        nextMonth3.innerHTML="December"
    }
    else if (monthName == "September") {
        nextMonth.innerHTML="October"
        nextMonth1.innerHTML="November"
        nextMonth2.innerHTML="December"
        nextMonth3.innerHTML="January"
    }
    else if (monthName == "October") {
        nextMonth.innerHTML="November"
        nextMonth1.innerHTML="December"
        nextMonth2.innerHTML="January"
        nextMonth3.innerHTML="February"
    }
    else if (monthName == "November") {
        nextMonth.innerHTML="December"
        nextMonth1.innerHTML="January"
        nextMonth2.innerHTML="February"
        nextMonth3.innerHTML="March"
    }
    else if (monthName == "December") {
        nextMonth.innerHTML="January"
        nextMonth1.innerHTML="February"
        nextMonth2.innerHTML="March"
        nextMonth3.innerHTML="April"
    }
}



let checkMonth = () => {



     // CURRENT YEAR - START


    if (monthName=="January" && monthFilter.value == `${year}-01`) {
        month = 1;
        daysInCurrentMonth = new Date(year, 1, 0).getDate(); 
        daysInNextMonth = new Date(year, 2, 0).getDate();
        daysInNextMonth1 = new Date(year, 3, 0).getDate();
        daysInNextMonth2 = new Date(year, 4, 0).getDate();
        daysInNextMonth3 = new Date(year, 5, 0).getDate();
            dayOfWeek= new Date(year, 0, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 4, 0).getDay() + 1;  
        

        
    
    }
    else if (monthName=="February"  && monthFilter.value == `${year}-02`) {
        month = 2;
        daysInCurrentMonth = new Date(year, 2, 0).getDate(); 
        daysInNextMonth = new Date(year, 3, 0).getDate();
        daysInNextMonth1 = new Date(year, 4, 0).getDate();
        daysInNextMonth2 = new Date(year, 5, 0).getDate();
        daysInNextMonth3 = new Date(year, 6, 0).getDate();
            dayOfWeek= new Date(year, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 5, 0).getDay() + 1;  

    
    }
    else if (monthName=="March" && monthFilter.value == `${year}-03`) {
        month = 3;
        daysInCurrentMonth = new Date(year, 3, 0).getDate(); 
        daysInNextMonth = new Date(year, 4, 0).getDate();
        daysInNextMonth1 = new Date(year, 5, 0).getDate();
        daysInNextMonth2 = new Date(year, 6, 0).getDate();
        daysInNextMonth3 = new Date(year, 7, 0).getDate();
           dayOfWeek= new Date(year, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 5, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 6, 0).getDay() + 1;  

    
    }
    else if (monthName=="April" && monthFilter.value == `${year}-04`) {
        month = 4;
        daysInCurrentMonth = new Date(year, 4, 0).getDate(); 
        daysInNextMonth = new Date(year, 5, 0).getDate();
        daysInNextMonth1 = new Date(year, 6, 0).getDate();
        daysInNextMonth2 = new Date(year, 7, 0).getDate();
        daysInNextMonth3 = new Date(year, 8, 0).getDate();
           dayOfWeek= new Date(year, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 5, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 6, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 7, 0).getDay() + 1;  

     
    }
    else if (monthName=="May" && monthFilter.value == `${year}-05`) {
        month = 5;
        daysInCurrentMonth = new Date(year, 5, 0).getDate(); 
        daysInNextMonth = new Date(year, 6, 0).getDate();
        daysInNextMonth1 = new Date(year, 7, 0).getDate();
        daysInNextMonth2 = new Date(year, 8, 0).getDate();
        daysInNextMonth3 = new Date(year, 9, 0).getDate();
           dayOfWeek= new Date(year, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 5, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 6, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 7, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 8, 0).getDay() + 1;  

    }
    else if (monthName=="June" && monthFilter.value == `${year}-06`) {
        month = 6;
        daysInCurrentMonth = new Date(year, 6, 0).getDate(); 
        daysInNextMonth = new Date(year, 7, 0).getDate();
        daysInNextMonth1 = new Date(year, 8, 0).getDate();
        daysInNextMonth2 = new Date(year, 9, 0).getDate();
        daysInNextMonth3 = new Date(year, 10, 0).getDate();
           dayOfWeek= new Date(year, 5, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 6, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 7, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 8, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 9, 0).getDay() + 1;  

      
    }
    else if (monthName=="July" && monthFilter.value == `${year}-07`) {
        month = 7;
        daysInCurrentMonth = new Date(year, 7, 0).getDate(); 
        daysInNextMonth = new Date(year, 8, 0).getDate();
        daysInNextMonth1 = new Date(year, 9, 0).getDate();
        daysInNextMonth2 = new Date(year, 10, 0).getDate();
        daysInNextMonth3 = new Date(year, 11, 0).getDate();
           dayOfWeek= new Date(year, 6, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 7, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 8, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 9, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 10, 0).getDay() + 1;  

     
    }
    else if (monthName=="August" && monthFilter.value == `${year}-08`) {
        month = 8;
        daysInCurrentMonth = new Date(year, 8, 0).getDate(); 
        daysInNextMonth = new Date(year, 9, 0).getDate();
        daysInNextMonth1 = new Date(year, 10, 0).getDate();
        daysInNextMonth2 = new Date(year, 11, 0).getDate();
        daysInNextMonth3 = new Date(year, 12, 0).getDate();
           dayOfWeek= new Date(year, 7, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 8, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 9, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 10, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 11, 0).getDay() + 1;  

        
    }
    else if (monthName=="September" && monthFilter.value == `${year}-09`) {
        month = 9;
        daysInCurrentMonth = new Date(year, 9, 0).getDate(); 
        daysInNextMonth = new Date(year, 10, 0).getDate();
        daysInNextMonth1 = new Date(year, 11, 0).getDate();
        daysInNextMonth2 = new Date(year, 12, 0).getDate();
        daysInNextMonth3 = new Date(year + 1, 1, 0).getDate();
           dayOfWeek= new Date(year, 8, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 9, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 10, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 12, 0).getDay() + 1;  

        
    }
    else if (monthName=="October" && monthFilter.value == `${year}-10`) {
        month = 10;
        daysInCurrentMonth = new Date(year, 10, 0).getDate(); 
        daysInNextMonth = new Date(year, 11, 0).getDate();
        daysInNextMonth1 = new Date(year, 12, 0).getDate();
        daysInNextMonth2 = new Date(year + 1, 1, 0).getDate();
        daysInNextMonth3 = new Date(year + 1, 2, 0).getDate();
           dayOfWeek= new Date(year, 9, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 10, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 12, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year + 1, 1, 0).getDay() + 1;  

     
    }
    else if (monthName=="November" && monthFilter.value == `${year}-11`)  {
        month = 11;
        daysInCurrentMonth = new Date(year, 11, 0).getDate(); 
        daysInNextMonth = new Date(year, 12, 0).getDate();
        daysInNextMonth1 = new Date(year + 1, 1, 0).getDate();
        daysInNextMonth2 = new Date(year + 1, 2, 0).getDate();
        daysInNextMonth3 = new Date(year + 1, 3, 0).getDate();
           dayOfWeek= new Date(year, 10, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 12, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year+1, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year+1, 2, 0).getDay() + 1;  

    
    }
    else if (monthName=="December" && monthFilter.value == `${year}-12`) {
        month = 12;
        daysInCurrentMonth = new Date(year, 12, 0).getDate(); 
        daysInNextMonth = new Date(year + 1, 1, 0).getDate();
        daysInNextMonth1 = new Date(year + 1, 2, 0).getDate();
        daysInNextMonth2 = new Date(year + 1, 3, 0).getDate();
        daysInNextMonth3 = new Date(year + 1, 4, 0).getDate();
           dayOfWeek= new Date(year, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 12, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year+1, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year+1, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year+1, 3, 0).getDay() + 1;  

    
    }

    // CURRENT YEAR - END



    
    // PREVIOUS YEAR START

    else if (monthName=="January"  && monthFilter.value == `${year-1}-01`) {
        month = 1;
        daysInCurrentMonth = new Date(year-1, 1, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 2, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 3, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 4, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 5, 0).getDate();
        dayOfWeek= new Date(year-1, 0, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 1, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 2, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 3, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 4, 0).getDay() + 1;  

    }
    else if (monthName=="February"  && monthFilter.value == `${year-1}-02`) {
        month = 2;
            daysInCurrentMonth = new Date(year-1, 2, 0).getDate(); 
            daysInNextMonth = new Date(year-1, 3, 0).getDate();
            daysInNextMonth1 = new Date(year-1, 4, 0).getDate();
            daysInNextMonth2 = new Date(year-1, 5, 0).getDate();
            daysInNextMonth3 = new Date(year-1, 6, 0).getDate();
            dayOfWeek= new Date(year - 1, 1, 0).getDay() + 1;  
            dayOfWeekNextMonth= new Date(year - 1 , 2, 0).getDay() + 1;  
            dayOfWeekNextMonth1= new Date(year - 1 , 3, 0).getDay() + 1;  
            dayOfWeekNextMonth2= new Date(year - 1 , 4, 0).getDay() + 1;  
            dayOfWeekNextMonth3= new Date(year - 1 , 5, 0).getDay() + 1; 

        }
    else if (monthName=="March" && monthFilter.value == `${year-1}-03`) {
        month = 3;
        daysInCurrentMonth = new Date(year-1, 3, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 4, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 5, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 6, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 7, 0).getDate();
        dayOfWeek= new Date(year - 1, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 3, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 4, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 5, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 6, 0).getDay() + 1;  
        dayOfWeek= new Date(year, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 5, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 6, 0).getDay() + 1;  

    }
    else if (monthName=="April" && monthFilter.value == `${year-1}-04`) {
        month = 4;
        daysInCurrentMonth = new Date(year-1, 4, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 5, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 6, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 7, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 8, 0).getDate();
        dayOfWeek= new Date(year - 1, 3, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 4, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 5, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 6, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 7, 0).getDay() + 1;  

    }
    else if (monthName=="May" && monthFilter.value == `${year-1}-05`) {
        month = 5;
        daysInCurrentMonth = new Date(year-1, 5, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 6, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 7, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 8, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 9, 0).getDate();
        dayOfWeek= new Date(year - 1 -1, 4, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 5, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 6, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 7, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 8, 0).getDay() + 1;  

    
    }
    else if (monthName=="June" && monthFilter.value == `${year-1}-06`) {
        month = 6;
        daysInCurrentMonth = new Date(year-1, 6, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 7, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 8, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 9, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 10, 0).getDate();
        dayOfWeekNextMonth= new Date(year, 6, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 7, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 8, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 9, 0).getDay() + 1;  
        dayOfWeek= new Date(year - 1 , 5, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 6, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 7, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 8, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 9, 0).getDay() + 1;  

      
    }
    else if (monthName=="July" && monthFilter.value == `${year-1}-07`) {
        month = 7;
        daysInCurrentMonth = new Date(year-1, 7, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 8, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 9, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 10, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 11, 0).getDate();
        dayOfWeek= new Date(year - 1 , 6, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 7, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 8, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 9, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 10, 0).getDay() + 1;  

     
    }
    else if (monthName=="August" && monthFilter.value == `${year-1}-08`) {
        month = 8;
        daysInCurrentMonth = new Date(year-1, 8, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 9, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 10, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 11, 0).getDate();
        daysInNextMonth3 = new Date(year-1, 12, 0).getDate();
        dayOfWeek= new Date(year - 1 , 7, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 8, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 9, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 10, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 11, 0).getDay() + 1;  

        
    }
    else if (monthName=="September" && monthFilter.value == `${year-1}-09`) {
        month = 9;
        daysInCurrentMonth = new Date(year-1, 9, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 10, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 11, 0).getDate();
        daysInNextMonth2 = new Date(year-1, 12, 0).getDate();
        daysInNextMonth3 = new Date(year, 1, 0).getDate();
        dayOfWeek= new Date(year - 1 , 8, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 9, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 10, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 11, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year - 1 , 12, 0).getDay() + 1;  

        
    }
    else if (monthName=="October" && monthFilter.value == `${year-1}-10`) {
        month = 10;
        daysInCurrentMonth = new Date(year-1, 10, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 11, 0).getDate();
        daysInNextMonth1 = new Date(year-1, 12, 0).getDate();
        daysInNextMonth2 = new Date(year, 1, 0).getDate();
        daysInNextMonth3 = new Date(year, 2, 0).getDate();
        dayOfWeek= new Date(year - 1, 9, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year - 1 , 10, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year - 1 , 11, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year - 1 , 12, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 1, 0).getDay() + 1;  

     
    }
    else if (monthName=="November" && monthFilter.value == `${year-1}-11`)  {
        month = 11;
        daysInCurrentMonth = new Date(year-1, 11, 0).getDate(); 
        daysInNextMonth = new Date(year-1, 12, 0).getDate();
        daysInNextMonth1 = new Date(year, 1, 0).getDate();
        daysInNextMonth2 = new Date(year, 2, 0).getDate();
        daysInNextMonth3 = new Date(year, 3, 0).getDate();
        dayOfWeek= new Date(year-1, 10, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year-1, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year-1, 12, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 2, 0).getDay() + 1;  

    
    }
    else if (monthName=="December" && monthFilter.value == `${year-1}-12`) {
        month = 12;
        daysInCurrentMonth = new Date(year-1, 12, 0).getDate(); 
        daysInNextMonth = new Date(year, 1, 0).getDate();
        daysInNextMonth1 = new Date(year, 2, 0).getDate();
        daysInNextMonth2 = new Date(year, 3, 0).getDate();
        daysInNextMonth3 = new Date(year, 4, 0).getDate();
        dayOfWeek= new Date(year-1, 11, 0).getDay() + 1;  
        dayOfWeekNextMonth= new Date(year-1, 12, 0).getDay() + 1;  
        dayOfWeekNextMonth1= new Date(year, 1, 0).getDay() + 1;  
        dayOfWeekNextMonth2= new Date(year, 2, 0).getDay() + 1;  
        dayOfWeekNextMonth3= new Date(year, 3, 0).getDay() + 1;  

    
    }


    // PREVIOUS YEAR  END





    // NEXT YEAR (4 MONTHS) START






    else if (monthName=="January"  && monthFilter.value == `${year+1}-01`) {
            month = 1;
            year = currentYear+1
            daysInCurrentMonth = new Date(year+1, 1, 0).getDate(); 
            daysInNextMonth = new Date(year+1, 2, 0).getDate();
            daysInNextMonth1 = new Date(year+1, 3, 0).getDate();
            daysInNextMonth2 = new Date(year+1, 4, 0).getDate();
            daysInNextMonth3 = new Date(year+1, 5, 0).getDate();
            dayOfWeek= new Date(year+1, 0, 0).getDay() + 1;  
            dayOfWeekNextMonth= new Date(year +1 , 1, 0).getDay() + 1;  
            dayOfWeekNextMonth1= new Date(year +1 , 2, 0).getDay() + 1;  
            dayOfWeekNextMonth2= new Date(year +1 , 3, 0).getDay() + 1;  
            dayOfWeekNextMonth3= new Date(year +1 , 4, 0).getDay() + 1;  
    
        }
        else if (monthName=="February"  && monthFilter.value == `${year+1}-02`) {
            month = 2;
            year = currentYear+1
                daysInCurrentMonth = new Date(year+1, 2, 0).getDate(); 
                daysInNextMonth = new Date(year+1, 3, 0).getDate();
                daysInNextMonth1 = new Date(year+1, 4, 0).getDate();
                daysInNextMonth2 = new Date(year+1, 5, 0).getDate();
                daysInNextMonth3 = new Date(year+1, 6, 0).getDate();
                dayOfWeek= new Date(year + 1, 1, 0).getDay() + 1;  
                dayOfWeekNextMonth= new Date(year + 1 , 2, 0).getDay() + 1;  
                dayOfWeekNextMonth1= new Date(year + 1 , 3, 0).getDay() + 1;  
                dayOfWeekNextMonth2= new Date(year + 1 , 4, 0).getDay() + 1;  
                dayOfWeekNextMonth3= new Date(year + 1 , 5, 0).getDay() + 1; 
    
    
            }
        else if (monthName=="March" && monthFilter.value == `${year+1}-03`) {
            month = 3;
            year = currentYear+1
            daysInCurrentMonth = new Date(year+1, 3, 0).getDate(); 
            daysInNextMonth = new Date(year+1, 4, 0).getDate();
            daysInNextMonth1 = new Date(year+1, 5, 0).getDate();
            daysInNextMonth2 = new Date(year+1, 6, 0).getDate();
            daysInNextMonth3 = new Date(year+1, 7, 0).getDate();
            dayOfWeek= new Date(year+1, 2, 0).getDay() + 1;  
            dayOfWeekNextMonth= new Date(year+1, 3, 0).getDay() + 1;  
            dayOfWeekNextMonth1= new Date(year+1, 4, 0).getDay() + 1;  
            dayOfWeekNextMonth2= new Date(year+1, 5, 0).getDay() + 1;  
            dayOfWeekNextMonth3= new Date(year+1, 6, 0).getDay() + 1;  
    
        }
        else if (monthName=="April" && monthFilter.value == `${year+1}-04`) {
            month = 4;
            year = currentYear+1
            daysInCurrentMonth = new Date(year+1, 4, 0).getDate(); 
            daysInNextMonth = new Date(year+1, 5, 0).getDate();
            daysInNextMonth1 = new Date(year+1, 6, 0).getDate();
            daysInNextMonth2 = new Date(year+1, 7, 0).getDate();
            daysInNextMonth3 = new Date(year+1, 8, 0).getDate();
            dayOfWeek= new Date(year+1, 3, 0).getDay() + 1;  
            dayOfWeekNextMonth= new Date(year+1, 4, 0).getDay() + 1;  
            dayOfWeekNextMonth1= new Date(year+1, 5, 0).getDay() + 1;  
            dayOfWeekNextMonth2= new Date(year+1, 6, 0).getDay() + 1;  
            dayOfWeekNextMonth3= new Date(year+1, 7, 0).getDay() + 1;  
    
        }




    
    // NEXT YEAR (4 MONTHS) END


    else {
        daysInCurrentMonth =  new Date(year, month, 0).getDate();    
        daysInNextMonth = new Date(year, month + 1, 0).getDate();
        daysInNextMonth1 = new Date(year, month + 2, 0).getDate();
        daysInNextMonth2 = new Date(year, month + 3, 0).getDate();
        daysInNextMonth3 = new Date(year, month + 4, 0).getDate();
    }
    
}

let monthNameFind = month => {

if (month == 1 || monthFilter.value == `${year}-01` || monthFilter.value == `${year-1}-01`  || monthFilter.value == `${year+1}-01`) {
    monthName = "January";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
} 
else if (month == 2 || monthFilter.value == `${year}-02` || monthFilter.value == `${year-1}-02`  || monthFilter.value == `${year+1}-02`) {
    monthName = "February";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 3 || monthFilter.value == `${year}-03` || monthFilter.value == `${year-1}-03`  || monthFilter.value == `${year+1}-03`) {
    monthName = "March";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 4 || monthFilter.value == `${year}-04` || monthFilter.value == `${year-1}-04`  || monthFilter.value == `${year+1}-04` ) {
    monthName = "April";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 5 || monthFilter.value == `${year}-05` || monthFilter.value == `${year-1}-05` ) {
    monthName = "May";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 6 || monthFilter.value == `${year}-06` || monthFilter.value == `${year-1}-06` ) {
    monthName = "June";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 7 || monthFilter.value == `${year}-07` || monthFilter.value == `${year-1}-07` ) {
    monthName = "July";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 8 || monthFilter.value == `${year}-08` || monthFilter.value == `${year-1}-08` ) {
    monthName = "August";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 9 || monthFilter.value == `${year}-09` || monthFilter.value == `${year-1}-09` ) {
    monthName = "September";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 10 || monthFilter.value == `${year}-10` || monthFilter.value == `${year-1}-10` ) {
    monthName = "October";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 11 || monthFilter.value == `${year}-11` || monthFilter.value == `${year-1}-11` ) {
    monthName = "November";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else if (month == 12 || monthFilter.value == `${year}-12` || monthFilter.value == `${year-1}-12` ) {
    monthName = "December";
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = true;
}
else {
    calendarBlockContainer.innerHTML = ""; 
    calendarBlockNextMonthContainer.innerHTML = "";
    calendarBlockNextMonthContainer1.innerHTML  = "";
    calendarBlockNextMonthContainer2.innerHTML  = ""; 
    calendarBlockNextMonthContainer3.innerHTML  = "";
    val = false;
}
monthFilter.placeholder = `${monthName} ${year}`;
checkMonth();
nextMonthName();



printDays();
let calendarBlockCurrent = document.querySelectorAll('.calendar-block-current-month');

    for (i=1; i<=calendarBlockCurrent.length; i++) {
        if (month == currentMonth && year == currentYear || monthFilter.value==`${year}-${todayInMonth}` ||  monthFilter.value==`${year}-${todayInMonth2}`) {
            if (i == day-1) {
                calendarBlockCurrent[i].classList.add('today');
                calendarBlockCurrent[i].innerHTML+="<span class='today-text'>Today<span>"
            }
        }
    }
    
}



monthNameFind(month);
let calendarBlock = document.querySelectorAll('.calendar-block');
let test;


function selectDateCurrentMonth(calendarDateBlock){
    let checkIfChecked = false;
    let test = calendarDateBlock.getAttribute('selectDate').slice(0, 2);
    if(monthFilter.value.includes(`${currentYear}`)) {
        if(month==currentMonth && test >= day) {
                if (selectedDates.includes(calendarDateBlock.getAttribute('selectDate'))) {
                    let index = selectedDates.indexOf(calendarDateBlock.getAttribute('selectDate'));
                    calendarDateBlock.style.borderColor ="#ececec"
                    calendarDateBlock.style.borderWidth ="1px"  
                    
            
                    if (index >= -1) {
                        selectedDates.splice(index, 1);
                        showSelectedDates.innerHTML=`${selectedDates} `
            
                        }
                            
                }  else {
                selectedDates.push(calendarDateBlock.getAttribute('selectDate'));
                calendarDateBlock.style.borderColor ="#ef6723"
                calendarDateBlock.style.borderWidth ="2px"
                checkIfChecked = true;
                showSelectedDates.innerHTML=`${selectedDates}, `;
                }

            if (selectedDates.length == 0) {
                overlay.style.display="block"
            } else if (selectedDates.length > 0) {
                overlay.style.display="none"
            }
        }
    }
     if (month > currentMonth) {
                if (selectedDates.includes(calendarDateBlock.getAttribute('selectDate'))) {
                    let index = selectedDates.indexOf(calendarDateBlock.getAttribute('selectDate'));
                    calendarDateBlock.style.borderColor ="#ececec"
                    calendarDateBlock.style.borderWidth ="1px"  
                    
            
                    if (index >= -1) {
                        selectedDates.splice(index, 1);
                        showSelectedDates.innerHTML=`${selectedDates} `
            
                        }
                            
                }  else {
                selectedDates.push(calendarDateBlock.getAttribute('selectDate'));
                calendarDateBlock.style.borderColor ="#ef6723"
                calendarDateBlock.style.borderWidth ="2px"
                checkIfChecked = true;
                showSelectedDates.innerHTML=`${selectedDates}, `;
                }

            if (selectedDates.length == 0) {
                overlay.style.display="block"
            } else if (selectedDates.length > 0) {
                overlay.style.display="none"
            }
    }
       
}


function selectDate(calendarDateBlock){
    let checkIfChecked = false;
    let test = calendarDateBlock.getAttribute('selectDate').slice(0, 2);
    console.log(test)
    if (monthFilter.value.includes(`${currentYear}`) && month >= currentMonth || monthFilter.value.includes(`${currentYear+1}`) ) {
    if (selectedDates.includes(calendarDateBlock.getAttribute('selectDate'))) {
        let index = selectedDates.indexOf(calendarDateBlock.getAttribute('selectDate'));
        calendarDateBlock.style.borderColor ="#ececec"
        calendarDateBlock.style.borderWidth ="1px"  
        

        if (index >= -1) {
            selectedDates.splice(index, 1);
            showSelectedDates.innerHTML=`${selectedDates} `

            }
                  
    }  else {
    selectedDates.push(calendarDateBlock.getAttribute('selectDate'));
    calendarDateBlock.style.borderColor ="#ef6723"
    calendarDateBlock.style.borderWidth ="2px"
    checkIfChecked = true;
    console.log(selectedDates);
    showSelectedDates.innerHTML=`${selectedDates}, `;
}
  
    // showSlobodiTermini();
}
if (selectedDates.length == 0) {
    overlay.style.display="block"
} else if (selectedDates.length > 0) {
    overlay.style.display="none"
}

}





function showSlobodiTermini(cekiraniDatum){
    selectedDates.forEach(cekiraniDatum => {
        moze.forEach(slobodniDatum => {
            if(cekiraniDatum === slobodniDatum.date){
                console.log(slobodniDatum.slobodniTermini);
            }
        });
    })};

    /*
    *   1. Treba da se nadje zajednicki datum izmedju selektovanog i datuma iz objekta da bi se prikazali slobodni termini
    *   2. Dok listas slobodne termine, moras da lista paralelno i zauzete da bi oni koji su zauzeti bili disabled ( a to znaci da ces morati *      da spojis slobodne i zauzete datume u jedan niz po rastucem redosledu i da onda izvuces slobodne i zauzete ).
    *   3. Kada odabere vreme za koje bukira, onda to vreme vezes za datum koji je izabran i spojis u jedan object.
    *   4. Ako ima vise od jednog selektovanog datuma, onda to smestas u niz objekata.
    **/ 

//     rezervisano = [
//         {
//             datum: datum koji je izabran,
//             vreme: vreme koje je izabrano
//         },
//         {
//             datum: datum koji je izabran,
//             vreme: vreme koje je izabrano
//         }
//     ];

//     // Krajnji cilj svega je ovaj json object

//     {
//         response: {
//             error: "Zajenbao si format",
//             success: "usralo te",
//         }
//     }

//     calleback = (response) => {
//         switch(response){
//             case: "error":
//                 uradiNesto(response.error);
//             break;
//             case: "success":
//                 uradiNesto(response.success);
//             break;
//             default:
//                 uradiNesto("default poruka");
//                 break;
//         }
//     }

//     function uradiNesto(sd){
//         $("div").innerHTML = sd;
//     }

// }














