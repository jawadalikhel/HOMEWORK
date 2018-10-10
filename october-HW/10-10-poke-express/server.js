const express = require('express');
const app = express();

const Pokemon = require('./module/pokemon');

app.get('/', (req, res) =>{
	res.send('hey hey heyyy');
})

app.get('/pokemon', (req, res) =>{
	res.send(Pokemon);
})

app.get('/pokemon/:index',(req, res) =>{
	res.render('show.ejs', {
		poke: Pokemon[req.params.index]
	});
});



app.listen(3000, () =>{
	console.log('im alive and youu!!');
})