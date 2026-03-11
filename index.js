const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Servidor em funcionamento."));
app.post("/mensagem", (req, res) => {
  const { nome } = req.body;
  res.send(`Mensagem recebida. Olá, ${nome}!`);
});

// routes/usuarios.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Lista de usuários"));
module.exports = router;

// index.js
const usuarios = require("./routes/usuarios");
app.use("/usuarios", usuarios);

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
