import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleRequest = async () => {
    try {
      const resp = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "my post",
          body: "this is a test post",
          userId: 1,
        }
      );

      setData(resp.data);
      setError(null);
    } catch (err) {
      setError("Error submitting data");
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleRequest}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send POST Request
      </button>

      {data && (
        <pre className="mt-4 bg-gray-100 p-2">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default App;
