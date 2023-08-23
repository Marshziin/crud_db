const express = require('express');

const app = express();
const routes = require('./routes/routes');

const port = 3000;

routes(app);

app.listen(port, () => {
   console.log(`💼 Server ONLINE in ${port}`);
});