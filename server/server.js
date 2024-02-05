// require express and body-parser
const express = require('express')
const bodyParser = require('body-parser')

// ! Multer


// initialize app with express
const app = express()
// initialize routers
const bricksRouter = require('./routes/bricks_image_store.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes
app.use('/api/addlegoimage', bricksRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});