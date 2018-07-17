const mongoose = require("mongoose")

const Chaussette = mongoose.model("Chaussette", {
  couleur: String,
  taille: Number
})

const appRouter = app => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome to our restful API")
  })

  app.get("/chaussettes/:couleur", (req, res) => {
    Chaussette.find({ couleur: req.params.couleur }).then(chaussettes =>
      res.json(chaussettes)
    )
  })

  app.post("/chaussettes", (req, res) => {
    const paire = new Chaussette(req.body)
    paire.save().then(response => res.json(response))
  })
}

module.exports = appRouter
