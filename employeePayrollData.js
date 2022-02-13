class EmployeePayrollData
{
    //Property
    id;
    salary;
    name;
    constructor(id,name,salary)
    {
        this.name=name;
        this.id=id;
        this.salary=salary;
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
        return "\n Id="+id+"Name="+this.name;
    }
}


let employeePayrollData=new EmployeePayrollData(10,'noufal',25000);
console.log(employeePayrollData.toString());
try
{
    employeePayrollData.name = "my";
    console.log(employeePayrollData.toString());
}catch(e)
{
    console.error(e);
}