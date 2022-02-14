/**
 * Author :Noufal mc
 * Date   :13-Feb-2022
 * Employee Payroll
 */
class EmployeePayrollData
{
    //Property
    id;
    salary;
    gender;
    startDate;
    //Contructor
    constructor(...params)
    {
      this.id = params[0];
      this.name = params[1]; 
      this.salary = params[2]; 
      this.gender = params[3]; 
      this.startDate = params[4];
    }
    //getter
    get name()
    {
        return this._name;
    }
    //setter
    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$')
      if(nameRegex.test(name))
          this._name = name;
      else
        throw "Name is Incorrect";
    }
    toString()
    {
        const options={year:'numeric',month:'long',day:'numeric'};
        const startEmpDate = this.startDate === undefined ? "undefined" :
               this.startDate.toLocaleDateString("en-US",options);
        return "\n Id => "+this.id+" Name =>"+this.name+
        " Salary =>"+this.salary+" Gender => "+this.gender+" Start date =>"+startEmpDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1,'Mark',25000,"F",new Date());
console.log(employeePayrollData.toString());
//try
try{
  employeePayrollData.name = "john";
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date()); 
console.log(newEmployeePayrollData.toString());

