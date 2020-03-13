import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-view-employee",
  templateUrl: "./view-employee.component.html",
  styleUrls: ["./view-employee.component.css"]
})
export class ViewEmployeeComponent implements OnInit {
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
}
