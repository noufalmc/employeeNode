const IS_NOTIME=0;
const IS_PARTTIME=1;
const IS_FULLTIME=2;
const IS_FULLTIME_HOUR=8;
const IS_PARTTIME_HOUR=4;
const IS_WAGE_PERHOUR=20;
let empCheck=Math.floor(Math.random()*10)%3;
let wage=IS_WAGE_PERHOUR*getHour();
console.log("Wage is"+wage);



function getHour()
{
    let hour=0;
if(empCheck==IS_PARTTIME)
{
    hour=IS_PARTTIME_HOUR;
}
else if(empCheck==IS_FULLTIME)
{
    hour=IS_FULLTIME_HOUR;
}
return hour;
}