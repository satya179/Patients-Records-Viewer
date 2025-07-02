
import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import PatientTable from './components/PatientTable';
import PatientForm from './components/PatientForm';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '', gender: '', visits: '' });

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        const transformed = data.results.map((user, index) => ({
          id: index + 1,
          name: user.name.first,
          age: user.dob.age,
          gender: user.gender,
          visits: Math.floor(Math.random() * 10) + 1
        }));
        setPatients(transformed);
      });
  }, []);

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toString().includes(search)
  );

  const handleEdit = (patient) => {
    setSelected(patient);
    setFormData(patient);
  };

  const handleSave = () => {
    if (selected) {
      setPatients(patients.map(p => (p.id === selected.id ? formData : p)));
    } else {
      setPatients([...patients, { ...formData, id: Date.now() }]);
    }
    setSelected(null);
    setFormData({ name: '', age: '', gender: '', visits: '' });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Patient Records Viewer</h2>
      <SearchBox search={search} onSearch={(e) => setSearch(e.target.value)} />
      <PatientTable patients={filteredPatients} onEdit={handleEdit} />
      <PatientForm
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        selected={selected}
      />
    </div>
  );
};

export default App;