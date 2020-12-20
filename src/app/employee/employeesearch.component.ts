import { Output, EventEmitter, Component } from '@angular/core';


@Component({
    selector:'employee-search',
    templateUrl:'./employeesearch.component.html'
})
export class EmployeeSearchComponent{
    
    code:string;

    @Output()
    searchkey:EventEmitter<string>=new EventEmitter<string>();
    
    onSearch():void{
        this.searchkey.emit(this.code);
        console.log(this.code);
    }

}