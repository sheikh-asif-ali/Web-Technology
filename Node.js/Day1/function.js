const emp = {
    empId: 1,
    empName: "Iron Man",
    age: 101,
    salary: 1000000
}
function getEmployeeData1(){
    return emp;
}
console.log("Employee Info =",getEmployeeData1());

const getEmployeeData2 = () => {
    emp.empId = 2;
    emp["empId"] = 3;
    return emp;
}