const IS_NOTIME=0;
const IS_PARTTIME=1;
const IS_FULLTIME=2;
const IS_WAGE_PERHOUR=20;
const MAX_HRS_IN_MONTH=160;
const NO_OF_WORKINGDAYS=20;
let totalEmpHrs=0;
let tota_workingDays=wage=0;
let counter=0;
let random,empCheck;
let employee=[];
var dailyMap=new Map();
let objectEmployeeArray=[];
while(MAX_HRS_IN_MONTH<=160 && tota_workingDays<NO_OF_WORKINGDAYS)
{
  empCheck=Math.floor(Math.random()*3);
  random=getWorkingHours(empCheck);
  counter++;
  objectEmployeeArray.push(
      {
          dayNum:counter,
          dailyHours:random,
          dailyWage:calculateWage(random),
          toString()
          {
          return "Day=>"+this.dayNum+"Hour=>"+this.dailyHours+"Wage=>"+this.dailyWage;
          },
      });
  
}
function calculateWage(empHrs)
{
        return empHrs*IS_WAGE_PERHOUR;
}
function sum(empWage)
{
        wage+=empWage;
}
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case 1:
            return 4;
        case 2:
            return 8;
        default:
            return 0;    
    }
}
function totalWage(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
employee.forEach(sum);
counter=0;
function mapWithDailyWage(dailyWage)
{
 counter++;
 return counter +"=>"+dailyWage;
}
function fulltimeWage(empWage)
{
    return empWage.includes("160");
}
function totalHour(hour,value)
{
  return hour+value;
}
console.log(objectEmployeeArray);