const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Pokemon = require('./module/pokemon');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) =>{
	res.send('hey hey heyyy');
})

// app.get('/pokemon', (req, res) =>{
// 	res.send('hey hey hey working not tooo hard');
// });


// app.get('/pokemon', (req, res) =>{
// 	res.render('index.ejs', {
// 		pokemon: Pokemon
// 	});
// });

app.get('/pokemon', (req, res) =>{
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});

app.get('/pokemon/:index', (req, res) =>{
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index]
	});

})


///// add a new pokemon
app.get('/pokemon/new' ,(req, res) =>{
	res.render('new.ejs');
})


app.post('/pokemon/:index', (req, res) =>{
	console.log(req.body, ' this is where our info from the pokemon form will live');

	Pokemon.push(req.body);
	res.redirect('/pokemon');
})

/// edit pokemon
app.get('/pokemon/:id/edit', (req, res) =>{
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.id],
    id: req.params.id
  })


})


app.listen(3000, () =>{
	console.log('im alive and youu!!');
})
