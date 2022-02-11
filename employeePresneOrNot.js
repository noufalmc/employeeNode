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
while(MAX_HRS_IN_MONTH<=160 && tota_workingDays<NO_OF_WORKINGDAYS)
{
  empCheck=Math.floor(Math.random()*3);
  random=getWorkingHours(empCheck);
  tota_workingDays++;
  employee[counter]=calculateWage(random);
  counter++;
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
let empFullDay=employee.reduce(totalWage,0);
let employeeFull=employee.map(mapWithDailyWage);
employee.filter(n=>n==160).forEach(n=>console.log("Fully Earned => "+n));
console.log("First=>"+employeeFull.find(fulltimeWage));
console.log("Every=>"+employeeFull.every(fulltimeWage));
console.log("Log=>"+employeeFull);
console.log("Emp Full Day=>"+empFullDay);
console.log("The wage is "+wage);
console.log("Total Hour Is =>"+totalEmpHrs);
console.log("Total Day Is =>"+tota_workingDays);
console.log("The Employee array is "+employee);