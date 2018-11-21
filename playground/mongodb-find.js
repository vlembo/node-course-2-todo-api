// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Something went wrong, cannot connect');
   }//adding return just makes sure the function stops if something is wrong and does not move to the next command
  console.log('connected to MongoDB server, YAY');

  // db.collection('Todos').find({
  //   _id:new ObjectID("5bf5a4419e7e381fd37d1b36")
  // }).toArray().then((docs)=>{
  //   console.log('todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });


  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`todos count: ${count}`);
   
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

   db.collection('Users').find({
     name:'Vivian'
   }).toArray().then((docs)=>{
     console.log('users');
     console.log(JSON.stringify(docs,undefined,2)); 
   },(err)=>{
     console.log('Unable to find Users',err);
   });
   


  //  db.close();//this closes the connection with the MongoDB server
 });