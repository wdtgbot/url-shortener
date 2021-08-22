require('dotenv').config();
const router = require('./routes/routes');
const express = require('express');
const path = require('path');
const expressGa = require('express-ga-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressGa(process.env.GA_ACCID));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
