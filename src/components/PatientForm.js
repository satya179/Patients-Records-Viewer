
// components/PatientForm.js
import React from 'react';

const PatientForm = ({ formData, setFormData, onSave, selected }) => (
  <>
    <h3>{selected ? 'Edit' : 'Add'} Patient</h3>
    <input
      placeholder="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    /><br />
    <input
      placeholder="Age"
      value={formData.age}
      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
    /><br />
    <input
      placeholder="Gender"
      value={formData.gender}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
    /><br />
    <input
      placeholder="Visits"
      value={formData.visits}
      onChange={(e) => setFormData({ ...formData, visits: e.target.value })}
    /><br />
    <button onClick={onSave}>Save</button>
  </>
);

export default PatientForm;