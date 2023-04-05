window.addEventListener('DOMContentLoaded',(event) =>{
    const name =document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.Value;
            textError.textContent="";
        }
        catch(e){
            textError.textContent= e;
 
        }
    });
   const salary = document.querySelector('#salary');
   const output = document.querySelector('.salary-output');
   output.textContent = salary.Value;
   salary.addEventListener('input',function(){
    output.textContent =salary.Value;
   });
});

const save =()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
    } catch(e){
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList !=undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList=[employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmpoyeePayrollList",JSON.stringify(employeePayrollList));
}

const resetForm =()=>{
    setValue('#name','');
    unSelectedValues('[name=profile]');
    unSelectedValues('[name=gender]');
    unSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','january');
    setValue('#salyearary','2023');


}
const unSelectedValues=(propertyValue)=>{
    let allItems = document.querySelector(propertyValue);
    allItems.forEach(element => {
        element.checked= false;
    });
}

const setTextValue =(id,value)=>{
    const element=document.querySelector(id);
    element.textContent = value;
}

const setValue =(id,value)=>{
    const element=document.querySelector(id);
    element.textContent = value;
}