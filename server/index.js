const express = require("express");
const app = express();
const db = require("./db/dbCmd");

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

const open = db.open;
const sCmd = db.sCmd;
const close = db.close;

const PORT = process.env.PORT || 3001;

open()

// GET
app.get("/ultimaPartida", (req, res) => {
  sCmd(`SELECT MAX(pk_partida) from partida`).then((result) => {
    console.log(result.rows[0].max)
    result.rows[0].max == null ? res.send(`0`) : res.send(`${result.rows[0].max}`)
  })
})

app.get("/partidas", (req, res) => {
  sCmd(`SELECT * from partida`).then((result) => {
    console.log(result.rows)
    res.send(result.rows)
  })
})

// POSTs - SQL INSERT
app.post("/savePartida", (req, res) => {
  try {
    let body = req.body
    sCmd(`INSERT INTO partida VALUES(${body.pk_partida},'${body.jogador}',${body.totalpontos})`)
      .then(res.send('Partida Salva com Sucesso!'))
  }
  catch (e) {
    res.send('Erro ao salvar a partida no banco de dados!')
    console.log(e)
  }
});

app.post("/saveQuadra", (req, res) => {
  try {
    let body = req.body
    sCmd(`INSERT INTO quadra VALUES(${body.partida},${body.area},${body.saque},${body.forehand},${body.backhand},${body.clear},${body.drop_},${body.smash},${body.drive},${body.lob},${body.netshot},${body.netkill},${body.netlift},${body.pontovalido})`)
      .then(() => res.send('Quadra Salva com Sucesso!'))
  }
  catch (e) {
    res.send('Erro ao salvar dados da quadra no banco de dados!')
    console.log(e)
  }
});

app.post("/saveFora", (req, res) => {
  try {
    let body = req.body
    sCmd(`INSERT INTO fora VALUES(${body.partida},${body.saque},${body.forehand},${body.backhand},${body.clear},${body.drop_},${body.smash},${body.drive},${body.lob},${body.netshot},${body.netkill},${body.netlift},${body.pontoinvalido})`)
      .then(() => res.send('Dados Fora da Quadra Salvo com Sucesso!'))
  }
  catch (e) {
    res.send('Erro ao salvar os dados de fora da quadra no banco de dados!')
    console.log(e)
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
