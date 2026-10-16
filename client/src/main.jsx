import React from "react";
import { createRoot } from "react-dom/client";

const API_URL = "http://localhost:5000";

function App() {
  const [status, setStatus] = React.useState("Checking API...");
  React.useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => setStatus(`API connected: ${data.status}`))
      .catch(() => setStatus("API is not reachable yet. Check the API container and port."));
  }, []);

  return (
    <main style={{fontFamily: "Arial, sans-serif", maxWidth: 720, margin: "60px auto", padding: 24}}>
      <h1>Shop Demo</h1>
      <p>React frontend for the DevOps Docker CLI assignment.</p>
      <p><strong>Express API status:</strong> {status}</p>
      <p>API URL: {API_URL}</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
