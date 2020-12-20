import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeTitlePipe} from './employee/employeetitle.pipe';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent} from './employee/employeelist.component';
import {EmployeeCountComponent} from './employee/employeecount.component';
import {EmployeeSearchComponent} from './employee/employeesearch.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OtherComponent } from './other/other.component'
import { NotFoundComponent } from './notfound/notfound.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes:Routes=[
  {path:'employee', component:EmployeeComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'', redirectTo:'/employee',pathMatch: 'full'},
  {path:'**',component:NotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    EmployeeSearchComponent,
    EmployeeTitlePipe,
    OtherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
