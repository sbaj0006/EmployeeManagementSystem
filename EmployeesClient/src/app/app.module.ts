import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./employees/employees.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

//services
import { EmployeeService } from "./employee.service";
import { AppRouterModule } from "./app-router.module";
import { HttpClientModule } from "@angular/common/http";

//material design
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";

//forms
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { DeleteEmployeeComponent } from "./delete-employee/delete-employee.component";
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    HeaderComponent,
    NewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //material design
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  entryComponents: [UpdateEmployeeComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
