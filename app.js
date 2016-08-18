var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'tung251195',
	database: 'DemoNodeJS',
	multipleStatements: true
});

connection.connect();

var article = {
	author: 'Thinh Phu',
	title: 'Cha biet viet gi',
	body: 'Lam sao de tan gai ???'
};

// Insert to DB
// var query = connection.query('insert into articles set ?', article, function(err, result) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(result);
// 	console.log(query.sql);
// });

// Select from DB
var querySelectNormal = connection.query('select * from articles', function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log('\n' + querySelectNormal.sql);
	console.log(result);
});

var id = '1; drop table articles;';

// Select from DB
var querySelectEscape = connection.query('select * from articles where id = ' + connection.escape(id), function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log('\n' + querySelectEscape.sql);
	console.log(result);
});

// Select from DB
var querySelectSafe = connection.query('select * from articles where id = ?', id, function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log('\n' + querySelectSafe.sql);
	console.log(result);
});
