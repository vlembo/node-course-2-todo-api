// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Something went wrong, cannot connect');
   }//adding return just makes sure the function stops if something is wrong and does not move to the next command
  console.log('connected to MongoDB server, YAY');

  //delete many
  //  db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //    console.log(result);
  //  });
  //delete one
  /*  db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
     console.log(result);
   }); */
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });
  //  db.collection('Users').deleteMany({name:'Vivian'}).then((result)=>{
  //      console.log(result);
  //  })
    db.collection('Users').findOneAndDelete({_id:ObjectID("5bf58598ce0e623dc445d5bb")}).then((result) =>{
    console.log(result);
    });
  //  db.close();//this closes the connection with the MongoDB server
 });