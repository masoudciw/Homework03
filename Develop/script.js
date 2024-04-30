// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('add-employees-btn');
const displayEmployeesBtn = document.getElementById('display-employees-btn');
const salaryAverage = document.getElementById('get-salary-average');
const firstName = document.getElementById('EmployeeFirstName');
const lastName = document.getElementById('EmployeeLastName');
const salary = document.getElementById('EmployeeSalary');
const usersBody = document.querySelector('tbody');
const averageBody = document.getElementById('average');

const employees = JSON.parse(localStorage.getItem('users')) || [];
console.log(employees);

const generateID = function () {
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15)
  ).toString();
};

const saveToLocalStorage = function () {
  localStorage.setItem('users', JSON.stringify(employees));
};

const displayEmployees = function () {
  usersBody.innerHTML = '';
  if (!employees.length) {
    usersBody.innerHTML = '<tr><td>No Emploees Found!</td></tr>';
    return;
  }

  employees.forEach(user => {
    usersBody.innerHTML += `
      <tr>
        <td>${user.firstName ? user.firstName : 'No First Name!'}</td>
        <td>${user.lastName ? user.lastName : 'No Last Name!'}</td>
        <td>${user.salary ? user.salary : 'No Salary!'}</td>
      </tr>
    `
  });
};

// Collect employee data
const collectEmployees = function () {
  const fN = firstName.value;
  const lN = lastName.value;
  const income = salary.value;
  const employeesInfo = {
    id: generateID(),
    firstName: fN,
    lastName: lN,
    salary: income
  };
  if (employeesInfo) {
    employees.push(employeesInfo);
    saveToLocalStorage();
    displayEmployees();
    firstName.value = "";
    lastName.value = "";
    salary.value = "";
    //localStorage.clear();
  } else {
    alert("Please Enter All The Employees's Information");
  };
}

const getAverageSalarie = function () {
  let sum = 0;
  employees.forEach(user => {
    const ave = sum += user.salary / employees.length;
    averageBody.innerHTML =
      ave
    console.log(ave);
  });
}

addEmployeesBtn.addEventListener('click', collectEmployees);
displayEmployeesBtn.addEventListener('click', displayEmployees);
salaryAverage.addEventListener('click', getAverageSalarie);

// Display the average salary
// const displayAverageSalary = function (employeesArray) {
//   // TODO: Calculate and display the average salary
// }

// // Select a random employee
// const getRandomEmployee = function (employeesArray) {
//   // TODO: Select and display a random employee
// }

// /*
//   ====================
//   STARTER CODE
//   Do not modify any of the code below this line:
// */

// // Display employee data in an HTML table
// const displayEmployees = function (employeesArray) {
//   // Get the employee table
//   const employeeTable = document.querySelector('#employee-table');

//   // Clear the employee table
//   employeeTable.innerHTML = '';

//   // Loop through the employee data and create a row for each employee
//   for (let i = 0; i < employeesArray.length; i++) {
//     const currentEmployee = employeesArray[i];

//     const newTableRow = document.createElement("tr");

//     const firstNameCell = document.createElement("td");
//     firstNameCell.textContent = currentEmployee.firstName;
//     newTableRow.append(firstNameCell);

//     const lastNameCell = document.createElement("td");
//     lastNameCell.textContent = currentEmployee.lastName;
//     newTableRow.append(lastNameCell);

//     const salaryCell = document.createElement("td");
//     // Format the salary as currency
//     salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
//       style: "currency",
//       currency: "USD"
//     });

//     newTableRow.append(salaryCell);

//     employeeTable.append(newTableRow);
//   }
// }

// const trackEmployeeData = function () {
//   const employees = collectEmployees();

//   console.table(employees);

//   displayAverageSalary(employees);

//   console.log('==============================');

//   getRandomEmployee(employees);

//   employees.sort(function (a, b) {
//     if (a.lastName < b.lastName) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });

//   displayEmployees(employees);
// }

// // Add event listener to 'Add Employees' button
// addEmployeesBtn.addEventListener('click', trackEmployeeData);
