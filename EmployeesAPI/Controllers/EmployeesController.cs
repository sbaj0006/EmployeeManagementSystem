using EmployeesAPI.Data;
using EmployeesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmployeesAPI.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class EmployeesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetEmployee(int id)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var employee = context.Employees.FirstOrDefault(n => n.Id == id);
                    if(employee == null)
                    {
                        return NotFound();
                    }
                    return Ok(employee);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpGet]
        public IHttpActionResult GetEmployees()
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var employees = context.Employees.ToList();
                    return Ok(employees);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        public IHttpActionResult PostEmployee([FromBody]Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                using (var context = new AppDbContext())
                {
                    context.Employees.Add(employee);
                    context.SaveChanges();
                    return Ok("Employee was added");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IHttpActionResult UpdateEmployee(int id, [FromBody]Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != employee.Id)
            {
                return BadRequest();
            }
            try
            {
                using (var context = new AppDbContext())
                {
                    var oldEmployee = context.Employees.FirstOrDefault(n => n.Id == id);
                    if (oldEmployee == null)
                    {
                        return NotFound();
                    }
                    oldEmployee.FirstName = employee.FirstName;
                    oldEmployee.LastName = employee.LastName;
                    oldEmployee.Email = employee.Email;
                    oldEmployee.PhoneNumber = employee.PhoneNumber;
                    oldEmployee.Mobile = employee.Mobile;

                    context.SaveChanges();
                    return Ok("Employee Updated");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteEmployee(int id)
        {
            try
            {
                using(var context = new AppDbContext())
                {
                    var employee = context.Employees.FirstOrDefault(n => n.Id == id);
                    if(employee == null)
                    {
                        return NotFound();
                    }
                    context.Employees.Remove(employee);
                    context.SaveChanges();
                    return Ok("Employee Deleted");
                }
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
