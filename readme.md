Express hw
ONLY .gitignore node_module ✅

Create an express app
1. Make a new directory called express-intro-hw ✅
2. Go inside express-intro-hw folder ✅
3. In terminal, Make an app.js file using touch ✅
4. In terminal, npm init -y ✅
5. Open folder ✅ 
6. Add express, Morgan, and ejs through npm i and call them inside app.js file ✅
7. Create a server using Express, and use logger (Morgan) in App.js (don’t forger to use .json()) ✅
8. Create a view folder ✅
9. Make sure the views folder and view engine is connected to ejs through path in App.js (review class work if you don’t remember). ✅
10. Add a public folder and connect it in App.js ✅
11. Make a javascript, image and stylesheet folder inside the public folder ✅
12. In stylesheet folder, add style.css file ✅
13. In javascript folder, add method.js that logs "hello world" ✅
14. In image folder, add 3 random pictures of your choice ✅
15. Connect style, javascript and images file to each ejs file as needed ✅

We will be making different requests, and different ejs files. Please follow naming convention based on the instructions.

16. Create a GET request with path “/“ that renders index.ejs with user info (a name) and 3 fun light infos of yourself(array of info).
a. In index.ejs should contain the html:5 boilerplate, a h1 that says `Welcome to my App ${user.name}`, and the list of fun light info of yourself. ex: "My favorite cuisines contain only carbs!!!". Also the h1 should be colored as your favorite color, this style should be imported in from stylesheets. ✅

1.  Create a GET request with path "/photo-fun" that renders photos.ejs
a. In photos.ejs should contain html:5 boilerplate, and all 3 photos from images folder. ✅ 

1.  Create a GET request with path "/:pet/:age" that renders pets.ejs
a. In pets.ejs should show the pet's name and age (which is grabbed from the params... should be passed through from the GET request). Should attach method.js to log hello world in your browser. ✅

NOTES 

STEP 1 - CREATE A FILE CALLED `.gitignore`

STEP 2 - PUT `node_modules` inside the file

STEP 3 - CREATE HMW DIRECTORY AND OPEN 

STEP 5 - MAKE `app.js`

STEP 6 - IN TERMINAL CREATE OBJECT BY TYPING `npm init -y`

STEP 7 - DOWNLOAD MORGAN EXPRESS AND EJS `npm i express morgan ejs`

STEP 8 - TOP OF PAGE ADD `const express = require("express");` 

STEP 9 - TOP OF PAGE ADD `const logger = require("morgan");`

STEP 10 - TOP OF PAGE ADD `const app = express();`

STEP 11 - TOP OF PAGE ADD `app.use(logger("dev"));`

STEP 12 - TOP OF PAGE ADD `app.use(express.json());`

STEP 13 - BOTTOM OF PAGE ADD
```JAVASCRIPT 
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
```
STEP 14 - CREATE VIEWS FOLDER

STEP 15 - SETUP VIEW FOLDER 
```JAVASCRIPT
app.set("views", path.join(__dirname, "views"));
```
STEP 16 - MAKE SURE VIEWS FOLDER AND VIEWS ENGINE IS CONNECTED TO EJS
```JavaScript 

app.set("views", path.join(__dirname, "views"));
// TELL WHERE TO FIND VIEWS FOLDER

app.set("view engine", "ejs");
// SET VIEW ENGINE TO USE EJS 
```
STEP 17 - ADD A PUBLIC FOLDER TO APP.JS AND CONNECT IT
```JAVASCRIPT
app.use(express.static(path.join(__dirname, "public")));
// TELLS THE APP WHERE TO SERVE UP STATIC FILES
```
STEP 18 - MAKE A JS FOLDER IMAGE FOLDER AND STYLESHEET FOLDER

STEP 19 - ADD STYLE.CSS TO STYLESHEET FOLDER

STEP 20 - IN JS FOLDER ADD METHODS.JS AND CONSOLE LOG `"HELLO WORLD"`

STEP 21 - ADD THREE IMAGES TO IMAGE FOLDER

STEP 22 - CONNECT STYLE SHEET AND JS 

```JavaScript 
<link rel="stylesheet" href="/stylesheet/style.css">
// STYLE SHEET 
<script src="/javascripts/methods.js" async defer></script>
// JS SCRIPT TAG 
// BOILER PLATE HTML WITH SCRIPT TAGS
```

STEP 23 - CONNECT EJS TO APP.JS
```JAVASCRIPT 
app.get("/", function (req, res) {
  res.render("index", {
    user: "Sonny",
    info: [
      "Likes to workout",
      "Speaks Castilian Spanish and Italian",
      "Served 6 years with the USCG as an active member in Aviation Search and Rescue",
    ],
  });
});
```
STEP 24 - RENDER PHOTOS ON APP.JS AND PHOTOS.EJS
```JAVASCRIPT 
app.get("/photo-fun", (req, res) => {
  res.render("photos");
});
```
STEP 25 - CREATE GET REQUEST WHERE PARAMS ARE PASSED IN THROUGH THE GET REQUEST
```JAVASCRIPT
// SETTING UP PATH "/:pet/:age"
app.get("/:pet/:age", (req, res) => {
    res.render("pets", { pet: req.params.pet, age: req.params.age })
//res.json({ pet: req.params.pet, age: req.params.age });
});
```