import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  newname: string="";
  firstname:string="Kamal";
  lastname: string="Mohan Singh Rana";
  age:number=12;
  gender:string="Male";
  colspan:number=2;
  showDetails:boolean=false;
  isBold:boolean=false;
  isItalics:boolean=false;
  toogleDetails():void{
    this.showDetails=!this.showDetails;
  }
  applyClass(){
    let classes={
      danger: this.showDetails,
      success:!this.showDetails
    }
    return classes;
  }
  
}
