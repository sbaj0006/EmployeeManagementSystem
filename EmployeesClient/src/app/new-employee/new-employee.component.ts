import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-employee",
  templateUrl: "./new-employee.component.html",
  styleUrls: ["./new-employee.component.css"]
})
export class NewEmployeeComponent {
  constructor(private service: EmployeeService, private router: Router) {}

  employeeForm = new FormGroup({
    FirstName: new FormControl("", Validators.required),
    LastName: new FormControl("", Validators.required),
    Email: new FormControl("", Validators.required),
    PhoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("\\d+\\.?")
    ]),
    Mobile: new FormControl("", Validators.pattern("\\d+\\.?"))
  });

  onSubmit() {
    console.log(this.employeeForm.value);
    this.service.createEmployee(this.employeeForm.value).subscribe(data => {});
    this.router.navigate(["/"]);
  }
}
