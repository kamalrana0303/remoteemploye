import { PipeTransform, Pipe } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
    name:'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform{
    transform(value:string, gender:string):string{
    
        if(gender.toLowerCase()=='male'){
            
            return 'Mr.'+" "+ value.toUpperCase();
        }else if(gender.toLowerCase()=='female'){
            return 'Miss. '+" "+value.toUpperCase();
        }
    }
}