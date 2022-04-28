const newYear = '1 Jan 2023';

const s=document.getElementById("secound");
function CountDown()
{
    const newYearDate = new Date(newYear);
    const currentDate= new Date();

    const diff = Math.floor(newYearDate-currentDate)/1000;
    const diffDays= Math.floor(diff/(60 * 60 * 24));
    const diffHours = Math.floor(diff/(60 * 60))%24;
    const diffMitute = Math.floor(diff/( 60 ))%60;
    const diffSec = Math.floor(diff%60);

    console.log(diffHours)
    document.getElementById("days").innerHTML= diffDays;
    document.getElementById("hours").innerHTML= formatTime(diffHours) ;
    document.getElementById("minutes").innerHTML= formatTime(diffMitute) ;
    s.innerHTML= formatTime(diffSec) ;
}
CountDown();

setInterval(CountDown,1000);
function formatTime(time)
{
    return time < 10 ? `0${time}`  : time;
}