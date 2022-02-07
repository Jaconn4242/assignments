function Employee(name, jobTitle, salary, partOrFull){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.partOrFull = partOrFull
    this.printEmployeeRecord = function () {
       this.partOrFull
       console.log("Employee's name is " + this.name)
    }
}
var Matt = new Employee("Matt", "Sales Representative", 35000,"Full Time")
var Chris = new Employee("Chris", "Administration", 40000, "Full Time")
var Abbi = new Employee("Abbi", "Receptionist", 30000, "Part Time")
var Jordan = new Employee("Jordan", "Manager", 55000, "Full Time")

console.log(Matt.printEmployeeRecord())
Chris.printEmployeeRecord()
Abbi.printEmployeeRecord()
Jordan.printEmployeeRecord()




