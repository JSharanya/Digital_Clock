function showtime(){
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var period="AM";
    
    if(hour==0){
        hour=12;
    }

    if(hour>12){
        hour=hour-12;
        period="PM";
    }

    hour=(hour<10)?"0"+hour:hour;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;

    var time=hour + ":" +min +":"+sec+" "+period;
    document.getElementById("Myclock").innerHTML=time;

    setTimeout(showtime,1000);
}

showtime();