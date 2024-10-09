interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Michael",
  lastName: "Faraday",
  age: 22,
  location: "England"
}

const student2: Student = {
  firstName: "Nicoloa",
  lastName: "Tesla",
  age: 28,
  location: "Croatia"
}

const studentList: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table');

const header: HTMLTableRowElement = document.createElement('tr');
header.innerHTML = `
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  <th>Location</th>
`
table.appendChild(header);

studentList.forEach(student => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const { firstName, lastName, age, location } = student;

  row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td>${location}</td>
  `
  table.appendChild(row);
})

document.body.appendChild(table)