const express = require("express");

const app = express();
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

app.listen(PORT, () => {
  console.log(`NYVARA WebMCP activo en puerto ${PORT}`);
});
