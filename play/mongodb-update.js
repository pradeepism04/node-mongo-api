const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
	if(err){
		console.log('Unable to connect mongodb server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 		_id: new ObjectID('5c52aa3054816c2e60391bc6')
	// 	},{
	// 		 $set:{
	// 		 		completed: true,
	// 		 		text: "new updatetion "
	// 		 	}	
	// 		},{
	// 			returnOriginal: false
	// 		}).then((result)=>{
	// 			console.log(result);
	// 		});

	db.collection('User').findOneAndUpdate({
		_id: new ObjectID('5c51a60a964c35e68a8af69f')
	}, {
		$set:{
			name: 'Pradeep Kumar Gupta'
		}, 
		$inc:{
			age:1
		}
	}, {
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});


	client.close();
});