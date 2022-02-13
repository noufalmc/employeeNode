const MAX_HRS_IN_MONTH=160;
const NO_OF_WORKINGDAYS=20;
const IS_WAGE_PERHOUR=20;
let totalEmpHrs=0;
let tota_workingDays=wage=0;
let counter=0;
let random;
let empCheck;
let objectEmployeeArray=[];
let partworkingDay=new Map();
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
function getSalarySum(sum,total)
{
    return sum+total;
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
//UC11A Return Total Wage and Total Hour
let totalWage=objectEmployeeArray.filter(object=>object.dailyWage>0).
reduce((total,objectEmployeeArray)=>total+=objectEmployeeArray.dailyWage,0);
 
let totalHour=objectEmployeeArray.filter(object=>object.dailyHours>0).reduce((total,objectEmployeeArray)=>
total+=objectEmployeeArray.dailyHours,0);

console.log("Total Wage => "+totalWage);
console.log("Total Hour => "+totalHour);
//UC11B Show The Full Working Days Using Foreach
objectEmployeeArray.filter(object=>object.dailyHours==8).
forEach(object=>process.stdout.write(object.toString()));
//UC11C Show Part Working Days Using Map
let partTimeFilter=objectEmployeeArray.filter(object=>object.dailyHours==4).map(object=>object.toString());
console.log(partTimeFilter);
//UC11D No Working Days Using Map
let noWorkingDays=objectEmployeeArray.filter(object=>object.dailyHours==0).map(object=>object.toString());
console.log(noWorkingDays);