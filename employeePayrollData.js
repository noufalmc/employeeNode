class EmployeePayrollData
{
    //Property
    id;
    salary;
    name;
    gender;
    startDate;
    constructor(id,name,salary,gender,startDate)
    {
        this.name=name;
        this.id=id;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
    }
    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
            this.name=name;
        }
        else
        {
            throw "Name Is Incorrect";
        }
    }
    get name()
    {
        return this.name;
    }
    toString()
    {
        return "\n Id => "+this.id+"Name => "+this.name+"Salary =>"+this.salary+" Gender => "+this.gender+"Start date"+this.startDate;
    }
}


let employeePayrollData=new EmployeePayrollData(10,'noufal',25000,"F",new Date());
console.log(employeePayrollData.toString());
