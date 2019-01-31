const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
	if(err){
		console.log('Unable to connect mongodb server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp');

	// db.collection('Todos').find().count().then( (count)=>{
	// 	console.log(`Todos count : ${count}`);
	// 	// console.log(JSON.stringify(docs, undefined, 2));
	// 	// console.log()
	// }, (err)=>{
	// 	console.log('Unable to fetch Todos', err);
	// });

	db.collection('User').find({name: 'sandeep'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 2));

	},  (err)=>{
		console.log('Unable to fetch User', err);
	});

	client.close();
});
