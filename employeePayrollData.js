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
        this.name=name;
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
console.log(employeePayrollData.name);