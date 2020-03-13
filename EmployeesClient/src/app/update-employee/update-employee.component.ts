import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"]
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA)
    { FirstName, LastName, Email, PhoneNumber, Mobile, Id },
    private service: EmployeeService
  ) {
    this.id = Id;
    this.form = fb.group({
      FirstName: [FirstName, Validators.required],
      LastName: [LastName, Validators.required],
      Email: [Email, Validators.required],
      PhoneNumber: [PhoneNumber, Validators.required],
      Mobile: [Mobile]
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    this.service.updateEmployee(this.id, this.form.value).subscribe(data => {});
    this.close();
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {}
}
