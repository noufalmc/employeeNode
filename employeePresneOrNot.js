const IS_NOTIME=0;
const IS_PARTTIME=1;
const IS_FULLTIME=2;
const IS_FULLTIME_HOUR=8;
const IS_PARTTIME_HOUR=4;
const IS_WAGE_PERHOUR=20;
let empCheck=Math.floor(Math.random()*10)%3;
let hour=0;

switch(empCheck)
{
    case IS_PARTTIME:
        hour=IS_PARTTIME_HOUR;
        break;
    case IS_FULLTIME:
        hour=IS_FULLTIME_HOUR;
        break;    

}
let wage=hour*IS_WAGE_PERHOUR;
console.log("Wage is"+wage);