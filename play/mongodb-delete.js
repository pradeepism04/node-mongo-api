const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
	if(err){
		console.log('Unable to connect mongodb server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp');

	// deletemany
		// db.collection('Todos').deleteMany({text: 'eatlunch'}).then((result)=>{
		// 	console.log(result);
		// })
	//deleteOne 
		// db.collection('Todos').deleteOne({text:'eatlunch'}).then(( result)=>{
		// 	console.log(result);
		// });

	// findeOneAnddelete
	
	// db.collection('Todos').findOneAndDelete({text: 'eatlunch'}).then((result)=>{
	// 	console.log(result);
	// });

	client.close();
});