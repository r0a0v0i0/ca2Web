const app = require(‘express’);  
const bodyParser = require('body-parser');
const mongodb = require(‘mongodb’).MongoClient;

const dbName = 'employee'; 

app.post(‘/employees/add’, (req, res) => {

  MongoClient.connect(url).then(client => {  
    client.close();

  }).catch(err => {
					 console.log('error', err);
  });
});

app.post('/employees/add', (req, res) => {

  console.log(req.body);
  let employee = {};
  employee.name = req.body.name;
  employee.empid = req.body.empid;
  employee.phone = req.body.phone;

  MongoClient.connect(url).then(client => {

    const db = client.db(dbName);
    const col = db.collection('employees');
    col.insertOne(employee).then(doc => {

      console.log('employee inserted', doc);
      res.redirect('/');
      client.close(() => console.log('connection closed'));

    }).catch(err => {
					console.log('error inserting employee', err);

    });
  }).catch(err => {
					 console.log('error connecting to mongodb', err);
  });
});


