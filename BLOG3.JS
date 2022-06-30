var date = new Date();

// ------------------------------------------------<FIRST BLOG START>------------------------------------------------
document.getElementById("day").innerHTML=date.getDate();
document.getElementById("month").innerHTML=date.getMonth();
document.getElementById("year").innerHTML=date.getFullYear();

document.getElementById("hour").innerHTML=date.getHours();
document.getElementById("minut").innerHTML=date.getMinutes();
document.getElementById("seconds").innerHTML=date.getSeconds();


setInterval(currenttime,1000);
function currenttime(){
    const b = new Date();
    document.getElementById("current-time").innerHTML = b.toLocaleTimeString();
}
// ------------------------------------------------<FIRST BLOG START>------------------------------------------------

// ------------------------------------------------<SECOND BLOG START>------------------------------------------------

document.getElementById("day1").innerHTML=date.getDate();
document.getElementById("month1").innerHTML=date.getMonth();
document.getElementById("year1").innerHTML=date.getFullYear();

document.getElementById("hour1").innerHTML=date.getHours();
document.getElementById("minut1").innerHTML=date.getMinutes();
document.getElementById("seconds1").innerHTML=date.getSeconds();


setInterval(currenttime1,1000);
function currenttime1(){
    const b = new Date();
    document.getElementById("current-time1").innerHTML = b.toLocaleTimeString();
}
// ------------------------------------------------<SECOND BLOG END>------------------------------------------------
// ------------------------------------------------<THIRD BLOG START>------------------------------------------------
document.getElementById("day2").innerHTML=date.getDate();
document.getElementById("month2").innerHTML=date.getMonth();
document.getElementById("year2").innerHTML=date.getFullYear();

document.getElementById("hour2").innerHTML=date.getHours();
document.getElementById("minut2").innerHTML=date.getMinutes();
document.getElementById("seconds2").innerHTML=date.getSeconds();


setInterval(currenttime2,1000);
function currenttime2(){
    const b = new Date();
    document.getElementById("current-time2").innerHTML = b.toLocaleTimeString();
}
// ------------------------------------------------<THIRD BLOG END>------------------------------------------------>

