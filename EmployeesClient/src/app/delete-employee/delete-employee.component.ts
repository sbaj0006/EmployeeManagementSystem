import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-delete-employee",
  templateUrl: "./delete-employee.component.html",
  styleUrls: ["./delete-employee.component.css"]
})
export class DeleteEmployeeComponent implements OnInit {
  employee = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Mobile: ""
  };

  id;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getEmployee(this.id).subscribe((data: any) => {
      console.log(data);
      this.employee.FirstName = data.FirstName;
      this.employee.LastName = data.LastName;
      this.employee.Email = data.Email;
      this.employee.PhoneNumber = data.PhoneNumber;
      this.employee.Mobile = data.Mobile;
    });
  }

  cancel() {
    this.router.navigate(["/"]);
  }

  confirm() {
    this.service.deleteEmployee(this.id).subscribe(data => {});
    this.cancel();
  }
}
