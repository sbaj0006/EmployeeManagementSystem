import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { MatTableDataSource } from "@angular/material/table";
import { EmployeeRepo } from "../interfaces/EmployeeRepo";
import { MatDialog } from "@angular/material/dialog";
import { UpdateEmployeeComponent } from "../update-employee/update-employee.component";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    "FirstName",
    "LastName",
    "Email",
    "PhoneNumber",
    "Mobile",
    "Actions"
  ];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EmployeeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      console.log("Result -", data);
      this.dataSource = new MatTableDataSource<EmployeeRepo>(
        data as EmployeeRepo[]
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateEmployee(employee) {
    console.log(employee);
    this.dialog.open(UpdateEmployeeComponent, {
      data: {
        Id: employee.Id,
        FirstName: employee.FirstName,
        LastName: employee.LastName,
        Email: employee.Email,
        PhoneNumber: employee.PhoneNumber,
        Mobile: employee.Mobile
      }
    });
  }
}
