const express = require('express');
const app = express();
const Pokemon = require('./module/pokemon');

const bodyParser = require('body-parser')

app.get('/', (req, res) =>{
	res.send('hey hey heyyy');
})

// app.get('/pokemon', (req, res) =>{
// 	res.send('hey hey hey working not tooo hard');
// });


app.get('/pokemon', (req, res) =>{
	res.render('index.ejs', {
		poke: Pokemon
	});
});


app.get('/pokemon/:index', (req, res) =>{
	res.render('show.ejs', {
		poke: Pokemon[req.params.index]
	})

});

// app.get('/pokemon/:id/', (req, res) =>{
// 	res.render('show.ejs', {
// 		showPoke: 

// 	});
// });














app.listen(3000, () =>{
	console.log('im alive and youu!!');
})