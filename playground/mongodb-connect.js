// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Something went wrong, cannot connect');
   }//adding return just makes sure the function stops if something is wrong and does not move to the next command
  console.log('connected to MongoDB server, YAY');

  //  db.collection('Todos').insertOne({
  //    text: 'Something else to do',
  //    completed:false
  //  },(err,result)=>{
  //    if(err){
  //      return console.log('unable to insert todo', err);
  //    }

  //    console.log(JSON.stringify(result.ops,undefined,2));
  //  });

//   db.collection('Users').insertOne({
//     name: 'Vivian',
//     age: 59,
//     location: 'Cary, NC'
//   },(err, result)=>{
//     if (err){
//        return console.log ('Unable to insert user',err);
//   }
//    console.log(result.ops[0]._id.getTimestamp());
//   });

   db.close();//this closes the connection with the MongoDB server
 });