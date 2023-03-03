var hour=0;
var sec=0;
var min=0;
var count=0;


document.querySelectorAll(".btn")[0].addEventListener("click",function(){
    flag=true;
    stopwatch();
})
document.querySelectorAll(".btn")[1].addEventListener("click",function(){
    flag=false;
    stopwatch();
})
document.querySelectorAll(".btn")[2].addEventListener("click",function(){
    hour=0;
    min=0;
    sec=0;
    count=0;
    
    document.querySelector(".hour").innerHTML="00";
    document.querySelector(".min").innerHTML="00";
    document.querySelector(".sec").innerHTML="00";
    document.querySelector(".count").innerHTML="00";

})

function stopwatch(){
    if(flag){
        count++;
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
            sec=0;
        }
    }
    if(hour<10){
      strhour="0"+hour;

    }
    else{
        strhour=hour;
    }
    if(min<10){
        strmin="0"+min;
    }
    else{
        strmin=min;
    }
    if(sec<10){
        strsec="0"+sec;
    }
    else{
        strsec=sec;
    }
    if(count<10){
        strcount="0"+count;
    }
    else{
        strcount=count;
    }
   
    document.querySelector(".hour").innerHTML=strhour;
    document.querySelector(".min").innerHTML=strmin;
    document.querySelector(".sec").innerHTML=strsec;
    document.querySelector(".count").innerHTML=strcount;
    setTimeout(stopwatch,10)

}