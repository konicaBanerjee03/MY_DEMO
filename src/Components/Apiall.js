import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter + Search
  useEffect(() => {
    let data = [...users];

    // Filter by category (company)
    if (category !== "all") {
      data = data.filter((user) => user.company.name === category);
    }

    // Search by name or email
    if (search.trim() !== "") {
      data = data.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredUsers(data);
  }, [search, category, users]);

  // Get unique company names (categories)
  const categories = ["all", ...new Set(users.map((u) => u.company.name))];

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Directory</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* User List */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} <br />
            <small>Company: {user.company.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
