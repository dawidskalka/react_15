import React, { useState } from 'react';

const ListaStudentow = () => {
  const [students, setStudents] = useState([]);
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [ocena, setOcena] = useState('');

  const dodajStudenta = (e) => {
    e.preventDefault();
    if (!imie.trim() || !nazwisko.trim() || ocena === '') {
      return;
    }

    const nowyStudent = {
      id: Date.now(),
      imie: imie.trim(),
      nazwisko: nazwisko.trim(),
      ocena: parseFloat(ocena),
    };

    setStudents((prev) => [...prev, nowyStudent]);
    setImie('');
    setNazwisko('');
    setOcena('');
  };

  const usunStudenta = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const sredniaOcena =
    students.length > 0
      ? (students.reduce((sum, student) => sum + student.ocena, 0) / students.length).toFixed(2)
      : '0.00';

  const posortowaniStudenci = [...students].sort((a, b) =>
    a.imie.localeCompare(b.imie, 'pl', { sensitivity: 'base' })
  );

  return (
    <div>
      <h2>Lista studentów</h2>
      <form onSubmit={dodajStudenta}>
        <div>
          <label>
            Imię:
            <input value={imie} onChange={(e) => setImie(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Nazwisko:
            <input value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Ocena:
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={ocena}
              onChange={(e) => setOcena(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Dodaj studenta</button>
      </form>

      <div>
        <p>Średnia ocen: {sredniaOcena}</p>
      </div>

      <ul style={{ listStyleType: "none"}}>
        {posortowaniStudenci.map((student) => (
          <li key={student.id}>
            {student.imie} {student.nazwisko} - ocena: {student.ocena}
            <button type="button" onClick={() => usunStudenta(student.id)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaStudentow;
