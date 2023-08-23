const bodyParser = require('body-parser');
const router = require('./userRoutes');


module.exports = app => {
   app.use(bodyParser.json());
   app.use(router)

   app.get('/', (req, res) => {
      res.status(200).send('Welcome to the first page!');
      console.log(`🪖 GET. Página principal IP: ${req.ip}`);
   });
}