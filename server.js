var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/friendsdb');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	birthday: {type: Date, default: Date.now},
},	{timestamps: true});

mongoose.model('Friend', FriendSchema);
var Friend = mongoose.model('Friend');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public/dist'));

app.get('/', function(req,res){
	console.log('Hello');
	res.json('Hello');
});

app.get('/friends', function(req,res){
	Friend.find({}, function(err, data){
		if(err){
			console.log(err);
		}
		else{
			res.json(data);
		}
	});
})

app.get('/friends/:id', function(req, res){
	Friend.findOne(req.id, function(err, data){
		if(err){
			console.log('Error getting user', err);
		}
		else {
			res.json(data)
		}
	})
})
app.listen(8000,function() {
    console.log("listening on port 8000");
});
