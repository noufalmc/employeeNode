let dailyWage=[];
const MAX_HOURS=160;
const TOTAL_WORK_DAYS=20;
console.log("ji");
while(MAX_HOURS<=160 && TOTAL_WORK_DAYS<=20)
{
    let empCheck=getDailyHours(Math.floor(Math.random()*3));
    console.log(empCheck);
}


function getDailyHours(dailyHours)
{
    switch(dailyHours)
    {
        case 1:
        return 4;
        case 2:
        return 8;
        case 0:
        return 0;
    
    }
}