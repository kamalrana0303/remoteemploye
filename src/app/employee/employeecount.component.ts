import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl:'./employeecount.component.html',
    styleUrls:['./employeecount.component.css']
})
export class EmployeeCountComponent{
    @Output()
    countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();
 
    selectedRadioButtonValue:string='All'

    @Input()
    all:number;
    @Input()
    male:number;
    @Input()
    female:number;

    onRadioButtonSelectionChanged():void{
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}