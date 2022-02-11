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
while(MAX_HRS_IN_MONTH<=160 && tota_workingDays<NO_OF_WORKINGDAYS)
{
  empCheck=Math.floor(Math.random()*3);
  random=getWorkingHours(empCheck);
  tota_workingDays++;
  employee[counter]=calculateWage(random);
  counter++;
  dailyMap.set(counter,random);
  totalEmpHrs+=random;
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
let empFullDay=employee.reduce(totalWage,0);
let employeeFull=employee.map(mapWithDailyWage);
let partTime=[];
let fullTime=[];
let noTime=[];
dailyMap.forEach((v,k)=>{
    console.log("day=> "+k+"Hour =>"+v);
})
dailyMap.forEach((value,key,Map)=>{
if(value==4) partTime.push(key);
if(value==8) fullTime.push(key);
if(value==0) noTime.push(key)
});

console.log("Employee Array"+employee);
console.log("Part Time"+partTime);
console.log("Full Time"+fullTime);
console.log("No Job"+noTime);
// let totalHours=Array.from(dailyMap.values()).reduce(totalHour,0);
// console.log("Total Hour =>"+totalHours+"Total wage=>"+calculateWage(totalHours));
// console.log("First=>"+employeeFull.find(fulltimeWage));
// console.log("Log=>"+employeeFull);
// console.log("Emp Full Day=>"+empFullDay);
// console.log("The wage is "+wage);
// console.log("Total Hour Is =>"+totalEmpHrs);
// console.log("Total Day Is =>"+tota_workingDays);
// console.log("The Employee array is "+employee);