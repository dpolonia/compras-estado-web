import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    // Simulação de resposta — substitui mais tarde por chamada ao Vertex AI ou BigQuery
    if (query.includes("total")) {
      setResponse("Total contratado pelo Estado entre 2020 e 2025: 129 mil milhões €");
    } else {
      setResponse("Desculpa, não consegui interpretar. Reformula ou escolhe uma das queries predefinidas.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Radar de Compras do Estado</h1>

      <label>Escreve a tua pergunta:</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ex: Qual o total contratado pela SPMS em 2022?"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      <button onClick={handleQuery}>Executar</button>

      <pre style={{ backgroundColor: "#f0f0f0", padding: "1rem", marginTop: "1rem" }}>
        {response}
      </pre>
    </div>
  );
}

export default App;
