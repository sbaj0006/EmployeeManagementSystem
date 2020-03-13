import { RouterModule, Routes } from "@angular/router";

//components
import { EmployeesComponent } from "./employees/employees.component";
import { NgModule } from "@angular/core";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";
import { DeleteEmployeeComponent } from "./delete-employee/delete-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

//route
const routes: Routes = [
  { path: "", component: EmployeesComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "new-employee", component: NewEmployeeComponent },
  { path: "delete-employee/:id", component: DeleteEmployeeComponent },
  { path: "view-employee/:id", component: ViewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
