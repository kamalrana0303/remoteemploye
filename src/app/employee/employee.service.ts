import { Injectable, OnInit } from '@angular/core';
import { IEmployee } from './employee.interface';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class EmployeeService{
    constructor(private http: HttpClient){

    }
    

    getEmployees():Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>('http://localhost:8080/projectemp/employee/list')
                                        .pipe(catchError(this.handleError));
       
    }
    private handleError(httpErrorResponse:HttpErrorResponse){
        if(httpErrorResponse.error instanceof ErrorEvent){
            console.error("The Client Side Error: ", httpErrorResponse.error.message);
        }else{
                console.error("The Server Side Error: ", httpErrorResponse);
            }
            return throwError('There is a network error');
        
    }
}