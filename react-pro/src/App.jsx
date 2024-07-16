import React from 'react';

function Students() {
  const students = [
    { name: 'Nikolai', department: 'Science', finalGrade: 85, status: 'Pass' },
    { name: 'Elyssa', department: 'Arts', finalGrade: 92, status: 'Pass' },
    { name: 'General', department: 'Commerce', finalGrade: 78, status: 'Pass' },
    { name: 'Sarah', department: 'Science', finalGrade: 89, status: 'Pass' },
    { name: 'Constantine', department: 'Arts', finalGrade: 76, status: 'Pass' },
    { name: 'Raine', department: 'Commerce', finalGrade: 82, status: 'Pass' },
    { name: 'Alex', department: 'Science', finalGrade: 95, status: 'Pass' },
    { name: 'Olivia', department: 'Arts', finalGrade: 81, status: 'Pass' },
    { name: 'Daniel', department: 'Commerce', finalGrade: 73, status: 'Fail' },
    { name: 'Sophia', department: 'Science', finalGrade: 68, status: 'Fail' },
  ];

  function Student({ student, index }) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td>{student.department}</td>
        {student.status === 'Pass' ? <td>{student.finalGrade}</td> : <td>-</td>}
        <td>{student.status}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student student={student} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
