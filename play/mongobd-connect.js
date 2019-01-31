// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

// var obj = new ObjectID();

// console.log(obj); // generate randomly 

// Example
// var user={name: 'Pradeep', age:23};
// var {name}=user;
// console.log(name); output : name=Pradeep

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
	if(err){
		console.log('Unable to connect mongodb server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp')
	// db.collection('Todos').insertOne({
	// 	text:'Something to do', 
	// 	completed: false
	// }, (err, result)=>{
	// 	if(err){
	// 			return console.log("Unable to insert todo", err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));


	// })

	// db.collection('User').insertOne({
	// 	name:'Pradeep',
	// 	age: 30, 
	// 	location: "bangalore"
	// },(err, result)=>{
	// 	if(err)
	// 		return console.log('Unable to insert User', err);
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp());

	// });


	// Insert new doc into User (name, age, location )
	client.close();
});












