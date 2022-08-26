import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '',redirectTo:"/departments",pathMatch:"full"},   // default route
  {path: 'departments',component:DepartmentListComponent},
  {path: 'employees',component:EmployeeListComponent},
  {path: "**",component:PagenotfoundComponent} // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
