var express = require('express');
var app = express();

var port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
	{ id: 1, name: 'Trung' },
	{ id: 2, name: 'Thinh' }
];

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Phan Quoc Trung'
	});
});

app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users
	});
})

app.get('/users/search', function(req, res) {
	var q = req.query.q;
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	
	res.render('users/index', {
		users: matchedUsers
	});
});	

app.listen(port, function() {
	console.log('Server listening on port' + port);
});

