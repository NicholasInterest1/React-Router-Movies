const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		releasedate: 'March 21, 1997',
		metascore: 100,
		rottentomato: '98%',
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
		imageUrl: 'https://jonyonson.github.io/images/movies/godfather.jpg',
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		releasedate: 'May 25, 1977',
		metascore: 92,
		rottentomato: '93%',
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		imageUrl: 'https://jonyonson.github.io/images/movies/starwars.jpg'
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		releasedate: 'December 19, 2001',
		metascore: 92,
		rottentomato: '91%',
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		imageUrl: 'https://jonyonson.github.io/images/movies/lordoftherings.jpg'
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		releasedate: 'July 3, 1991',
		metascore: 94,
		rottentomato: '93%',
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
		imageUrl: 'https://jonyonson.github.io/images/movies/t2.jpg'
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		releasedate: 'December 6, 1994',
		metascore: 76,
		rottentomato: '67%',
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
		imageUrl: 'https://jonyonson.github.io/images/movies/dumbanddumber.jpg'
	},
	{
		id: 5,
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		releasedate: 'December 24, 1993',
		metascore: 89,
		rottentomato: '73%',
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
		imageUrl: 'https://jonyonson.github.io/images/movies/tombstone.jpg'
	},
];

app.get('/api/movies', (req, res) => {
	res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.status(201).json(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
