const path = require("path");
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine("hbs", engine({
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log("PATH: ", path.join(__dirname, "resources/views"));

app.get('/', (req, res) => {
  res.render("home");
});

app.get('/news', (req, res) => {
  res.render("news");
});


//IP Address: 127.0.0.1

// Install Nodemon: npm install nodemon --save -dev
// Go to package.json => scripts => "start": "nodemon index.js",
// => To run: npm start

// Push to git
// 1. Open Terminal, type: git init
// 2. Add new file .gitignore
// 3. Open .gitignore, type: node_modules/, .vscode
// 4. Type git add. to Terminal
// 5. Type git commit -m "Input message here"
// 6. Go to Github.com, navigate to repository, copy git remote add origin https://github.com/trngmhuu/DemoNodeJS.git
// 7. git branch -M main
// 8. git push -u origin main

// Install Morgan
// npm install morgan --save -dev
// Go to index.js, type const morgan = require('morgan')
// app.use(morgan('combined')) to see log (Use for debug)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});