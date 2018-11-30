var express = require('express');
var router = express.Router();
//-Mongodb
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Dockerizado $AA-B1' });
});

router.get('/hello', function (req, res) {
  res.send('Hello World! **');
});
router.get('/db',function(req,res){
  /*console.log("=====================================")
  console.log("conecto: " + req.query.db)
  console.log("=====================================")*/
  MongoClient.connect('mongodb://mongo', function(err, database) {
     
      let db = database.db('Andalucia2018')
      var coll= db.collection('ambitos_mayores').find({}).toArray(function(err,result){
        if(err){
        res.send(err);
        console.log("=====================================")
        }else{
          res.send(result);
          console.log("=====================================")
        }
      });

  });
});

router.get('/ambito',function(req,res){
  console.log("lanzo informe: " + req.query.tabla + ":" + req.query.id);
  MongoClient.connect('mongodb://mongo', function(err, database) {

      let db = database.db('Andalucia2018')
      db.collection(req.query.tabla, function(err, collection) {
          collection.findOne({ _id: req.query.id }, function(err, items) {
              if (err) throw err;
              res.send(items);
          });
      });

  });
});
router.get('/tabla',function(req,res){
  console.log("lanzo informe: " + req.query.tabla);
  MongoClient.connect('mongodb://mongo', function(err, database) {

      /*let db = database.db('Andalucia2018');
      var coll= db.collection(req.query.tabla).find({}).toArray(function(err,result){
        if(err){
        res.send(err);
        }else{
          res.send(result);
        }
      });*/

      let db = database.db('Andalucia2018')
      var coll= db.collection(req.query.tabla).find({}).toArray(function(err,result){
        if(err){
        res.send(err);
        console.log("=====================================")
        }else{
          res.send(result);
          console.log("=====================================")
        }
      });



  });
});



module.exports = router;
