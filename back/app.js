const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/routes.js")
const app = express()
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost/chaussettes")

// const Chaussette = mongoose.model("Chaussette", {
//   couleur: String,
//   taille: Number
// })

// const paire1 = new Chaussette({
//   taille: 42,
//   couleur: "gris"
// })
// const paire2 = new Chaussette({
//   taille: 42,
//   couleur: "bleu"
// })

// paire1.save().then(() => console.log("done"))
// paire2.save().then(() => console.log("done"))

routes(app)

const server = app.listen(8000, () => {
  console.log("app running on port.", server.address().port)
})
