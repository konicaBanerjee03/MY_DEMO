import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 24 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 35 },
  ]);

  const sortByAge = () => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    setPeople(sortedPeople);
  };

  return (
    <div>
      <h1>People List</h1>
      <button onClick={sortByAge}>Sort by Age</button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
