import React from "react";
import EmployeeCard from "./EmployeeCard";
import "./styles.css";

const employees = [
  { id: 1, name: "Ananya Sharma", position: "Software Engineer", department: "Engineering" },
  { id: 2, name: "Rohan Mehta", position: "Product Manager", department: "Product" },
  { id: 3, name: "Kavya", position: "QA Engineer", department: "Quality Assurance" },
  { id: 4, name: "Ishita Gupta", position: "UI/UX Designer", department: "Design" },
  { id: 5, name: "Arjun Verma", position: "Cloud Engineer", department: "Infrastructure" },
  { id: 6, name: "Giri Pranav", position: "Full Stack Developer", department: "Engineering" },
];

function EmployeeDashboard() {
  return (
    <div className="dashboard">
      <h2>Employee List</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            position={employee.position}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
