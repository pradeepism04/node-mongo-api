var mongoose= require('mongoose');
var Todo=mongoose.model('Todo', {
	text:{
		type:String,
		required: true,
		minlength:1, 
		trim: true
	},
	completed:{
		type: Boolean, 
		default: false
	},
	completedAt:{
		type: Number, 
		default: null
	}
});





module.exports={Todo};


















// var newTodo = new Todo({
// 	text: 'Cook dinner'

// });

// newTodo.save().then((doc)=>{
// 	console.log('Save todo', doc);
// }, (err)=>{
// 	console.log('Unable to save todo');
// });



// var otherTodo= new Todo({

// });

// otherTodo.save().then((doc)=>{
// 	console.log(JSON.stringify(doc, undefined , 2));
// }, (err)=>{
// 	console.log('Unable to save other todo', err);
// })


// user Model
// email - required it - trim - set type sis string - set min length of 1 
// name 
