const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const Pokemon = require('./module/pokemon');

app.get('/', (req, res) =>{
	res.send('hey hey heyyy');
})

// app.get('/pokemon', (req, res) =>{
// 	res.send(Pokemon);
// })


app.get('/pokemon/show', (req, res) =>{
	res.render('show.ejs')
})

app.get('/pokemon',(req, res) =>{
	res.render('index.ejs', {
		poke: Pokemon
	});
});



app.listen(3000, () =>{
	console.log('im alive and youu!!');
})