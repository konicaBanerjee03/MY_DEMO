import React, { useState } from "react";

function App() {
  const List = ["python", "react", "Js", "java", "C"];

  const [items, setItems] = useState(List);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // if input empty show all items again
    if (searchInput.trim() === "") {
      setItems(List);
      return;
    }

    const filteredItem = List.filter((x) =>
      x.toLowerCase().includes(searchInput.toLowerCase())
    );

    setItems(filteredItem);
  };

  return (
    <>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
      />

      <button onClick={handleSearch}>Search me</button>

      <ul>
        {items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </>
  );
}

export default App;


//debounce
// import React, { useState, useEffect } from "react";

// function App() {
//   const items = [
//     "Apple", "Banana", "Orange", "Grapes", "Pineapple",
//     "Mango", "Strawberry", "Blueberry", "Watermelon", "Peach"
//   ];

//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   // Debounced value
//   const [debouncedValue, setDebouncedValue] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedValue(search);
//     }, 500); // 500ms debounce delay

//     return () => clearTimeout(timer);
//   }, [search]);

//   useEffect(() => {
//     if (debouncedValue === "") {
//       setFilteredItems(items);
//     } else {
//       const filtered = items.filter(item =>
//         item.toLowerCase().includes(debouncedValue.toLowerCase())
//       );
//       setFilteredItems(filtered);
//       console.log("Filtered list updated for:", debouncedValue);
//     }
//   }, [debouncedValue]);

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h2>Debounce Search Example</h2>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Type to search..."
//         style={{ padding: "8px", width: "200px" }}
//       />
//       <ul>
//         {filteredItems.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
