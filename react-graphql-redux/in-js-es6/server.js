import express from 'express';
import { MongoClient } from 'mongodb';

let config = {
  port: 3000,
  mongodbUrl: 'mongodb://admin:admin@ds029705.mlab.com:29705/rgrjs'
};

let app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Express 7!');
// });
app.use(express.static('public'));

let db;
MongoClient.connect(config.mongodbUrl, (err, database) => {
  if(err) throw err;

  db = database;
  app.listen(config.port, () => console.log('Listening on port ' + config.port));
});

app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if(err) throw err;

    res.json(links);
  })
})