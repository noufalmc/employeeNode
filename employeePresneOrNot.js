const IS_NOTIME=0;
const IS_PARTTIME=1;
const IS_FULLTIME=2;
const IS_WAGE_PERHOUR=20;
const MAX_HRS_IN_MONTH=160;
const NO_OF_WORKINGDAYS=20;
let totalEmpHrs=0;
let tota_workingDays=0;
let random;
let employee=[];
while(MAX_HRS_IN_MONTH<=160 && tota_workingDays<NO_OF_WORKINGDAYS)
{
  random=Math.floor(Math.random()*3);
  if(random==1)
  {
      tota_workingDays+=1;
      totalEmpHrs+=4;
  }
  else if(random==2)
  {
      tota_workingDays+=1;
      totalEmpHrs+=8;
  }
}
employee[0]=calculateWage(totalEmpHrs);
function calculateWage(empHrs)
{
        return empHrs*IS_WAGE_PERHOUR;
}
console.log("Total Hour Is =>"+totalEmpHrs);
console.log("Total Day Is =>"+tota_workingDays);
console.log("The Employee array is "+employee);