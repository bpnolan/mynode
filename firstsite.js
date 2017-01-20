var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.port || 3000);


app.use(express.static(__dirname + '/public'));


var fortunes = [
    'you will gain 100 mmr today',
    'you will have a peasant surprise',
    'myes',
    'you will lose 100 mmr today',
    'you will meet a sloth today'
];

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune : randomFortune});
});

/*custom 404 page*/
app.use(function(req, res, next){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

/*custom 500 page*/
app.use(function(err, res, req, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('app started on http://localhost:'+app.get('port')+'; Press ctrl-C to terminate');
});