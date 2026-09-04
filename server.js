const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    name: "NYVARA",
    service: "WebMCP",
    status: "online",
    message: "NYVARA WebMCP funcionando correctamente"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "nyvara-webmcp"
  });
});

app.get("/mcp", (req, res) => {
  res.status(200).json({
    name: "NYVARA",
    service: "WebMCP",
    status: "ready",
    message: "Endpoint MCP de NYVARA disponible"
  });
});

app.post("/mcp", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "nyvara-webmcp",
    received: req.body || {}
  });
});

app.listen(PORT, () => {
  console.log(`NYVARA WebMCP activo en puerto ${PORT}`);
});
// NYVARA MCP V01
