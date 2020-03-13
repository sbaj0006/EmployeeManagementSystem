using EmployeesAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeesAPI.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(): base("name=EmployeesDb")
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}