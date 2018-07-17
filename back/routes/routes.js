const appRouter = app => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome to our restful API")
  })

  app.get("/chaussettes", (req, res) => {
    res.json([
      {
        id: 1,
        taille: "42",
        couleur: "gris"
      },
      {
        id: 2,
        taille: "42",
        couleur: "jaune"
      }
    ])
  })
}

module.exports = appRouter
