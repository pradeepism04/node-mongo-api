var mongoose = require('mongoose');
var User = mongoose.model('User', {
	email: {
		type: String, 
		required: true, 
		trim: true, 
		minlength: 1
	}
}); 



module.exports= {User};

// var newUser= new User({
// 	email: "pradeep@p.com"
// });
// newUser.save().then((user)=>{
//  console.log('Save user ', user);
// }, (err)=>{
// 	console.log('Unable to save new user', err);
// })

