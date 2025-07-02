import React from 'react';

const PatientTable = ({ patients, onEdit }) => (
  <table border="1" cellPadding="10" cellSpacing="0" width="100%">
    <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Visits</th><th>Action</th>
      </tr>
    </thead>
    <tbody>
      {patients.map(p => (
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>{p.age}</td>
          <td>{p.gender}</td>
          <td>{p.visits}</td>
          <td><button onClick={() => onEdit(p)}>View/Edit</button></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PatientTable;
