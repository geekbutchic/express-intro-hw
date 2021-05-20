const express = require("express");
// REQUIRE IN EXPRESS

const logger = require("morgan");
// REQUIRE IN MORGAN

const path = require("path");
// BRING IN PATH BY DEFAULT - GIVEN TO US BY NODE

const app = express();
// INITIALIZE EXPRESS APP

app.use(logger("dev"));
// LOGGER TELLS WHAT PATH IM ON - WHAT REQUEST IM MAKING

app.use(express.json());
// USES EXPRESS JSON

app.use(express.static(path.join(__dirname, "public")));
// TELLS THE APP WHERE TO SERVE UP STATIC FILES

app.set("views", path.join(__dirname, "views"));
// TELL WHERE TO FIND VIEWS FOLDER

app.set("view engine", "ejs");
// SET VIEW ENGINE TO USE EJS

// SETTING UP USER AND INFO
app.get("/", function (req, res) {
  res.render("index", {
    user: "Sonny",
    info: [
      "Likes to workout.",
      "Speaks Castilian Spanish and Italian.",
      "Three pictures below show visual goals I hope to achieve!",
    ],
  });
});

// RENDER PHOTOS.EJS
app.get("/photo-fun", (req, res) => {
  res.render("photos");
});

// SETTING UP PATH "/:pet/:age"
app.get("/:pet/:age", (req, res) => {
    res.render("pets", { pet: req.params.pet, age: req.params.age })
//res.json({ pet: req.params.pet, age: req.params.age });
});

// START EXPRESS SERVER
app.listen(3000, () => {
  console.log(`Server is running on PORT: ${3000}`);
});
