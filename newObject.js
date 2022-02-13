const MAX_HRS_IN_MONTH=160;
const NO_OF_WORKINGDAYS=20;
const IS_WAGE_PERHOUR=20;
let totalEmpHrs=0;
let tota_workingDays=wage=0;
let counter=0;
let random;
let empCheck;
let objectEmployeeArray=[];
while(MAX_HRS_IN_MONTH<=160 && tota_workingDays<20)
{
  empCheck=Math.floor(Math.random()*3);
  random=getWorkingHours(empCheck);
  counter++;
  tota_workingDays++;
  objectEmployeeArray.push(
      {
          dayNum:counter,
          dailyHours:random,
          dailyWage:calculateWage(random),
          toString()
          {
          return '\nDay => '+this.dayNum+' Hour => '+this.dailyHours+ ' Wage =>' +this.dailyWage;
          }
      });
}
function calculateWage(empHrs)
{
        return empHrs*IS_WAGE_PERHOUR;
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
console.log("UC10 => \n "+objectEmployeeArray);
let totalWage=objectEmployeeArray.filter(object=>object.dailyWage>0).reduce();
console.log("Daily Wage>0"+totalWage);