import {Component, OnInit } from '@angular/core'
import {EmployeeService} from './employee.service'
import { IEmployee } from './employee.interface';
@Component({
    selector:'employee-list',
    templateUrl:'./employeelist.component.html',
    styleUrls: ['./employeelist.component.css'],
    providers:[EmployeeService]

})
export class EmployeeListComponent implements OnInit{
    employees: IEmployee[]=[];
    empcode:string="";
    changedRadioButtonValue:string='All';
    constructor(private _service:EmployeeService){
    
    }
    ngOnInit(){
        this._service.getEmployees().subscribe((response)=>{
            this.employees=response;
        });
    }

    getEmployees():void{
        this.employees=[
            {code:'emp101', name:'kamal', gender:'Male', age:21, salary:20000, dob:'02/02/1993', attendence:.20},
            {code:'emp103', name:'ashish', gender:'Male', age:21, salary:30000, dob:'03/16/1993', attendence:.30},
            {code:'emp102', name:'rohit', gender:'Male', age:21, salary:20000, dob:'02/27/1994' ,attendence:.30}
         ]
    }
    trackByCode(index:number, employee:any):string{
        return employee.code;    
    }

    onChangedButtonValue(selectedButton:string):void{
        this.changedRadioButtonValue=selectedButton;
    }

    onSearchingValue(searchkey:string):void{
        this.empcode=searchkey;
        console.log("empcode: "+this.empcode);
    }

    getAllCount():number{
        return this.employees.length;
    }
    getMaleCount():number{
        return this.employees.filter(e=>e.gender==='Male').length;
    }
    getFemaleCount():number{
        return this.employees.filter(e=>e.gender==='Female').length;
    }
    getLowercase(value:string):string{
        return value.toLowerCase();
    }
}