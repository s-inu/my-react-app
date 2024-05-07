import React, { useState } from "react";

function FetchURLComponent() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    if (!url) {
      setError("Please enter a URL.");
      return;
    }
    setError(""); // Clear previous errors
    setResponse("Loading..."); // Temporary response during the fetch

    try {
      const result = await fetch(url);
      const text = await result.text(); // Assuming the response is text for simplicity
      setResponse(text);
    } catch (err) {
      setError("Failed to fetch: " + err.message);
      setResponse(""); // Clear the response on error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <button type="submit">Fetch</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default FetchURLComponent;
