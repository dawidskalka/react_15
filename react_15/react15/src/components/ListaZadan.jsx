import { useState } from "react";

export default function ListaZadan() {
  const [zadania, setZadania] = useState([]);
  const [zadanieTekst, setZadanieTekst] = useState("");

  const dodajZadanie = (event) => {
    event.preventDefault();
    const text = zadanieTekst.trim();
    if (!text) return;

    const noweZadanie = {
      id: Date.now().toString(),
      text,
    };

    setZadania((prev) => [...prev, noweZadanie]);
    setZadanieTekst("");
  };

  const usunZadania = () => {
    setZadania([]);
  };

  return (
    <div>
      <h2>Moja lista zadań</h2>
      <form onSubmit={dodajZadanie}>
        <input type="text" value={zadanieTekst} onChange={(event) => setZadanieTekst(event.target.value)}
        />
        <button type="submit">Dodaj</button>
      </form>
      <button type="button" onClick={usunZadania} disabled={zadania.length === 0}>Usuń zadania</button>
      <ul style={{ listStyleType: "none"}}>
        {zadania.map((zadanie) => (
          <li key={zadanie.id}>{zadanie.text}</li>
        ))}
      </ul>
    </div>
  );
}
