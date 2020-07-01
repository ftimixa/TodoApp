const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', require('./api'));
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send(`${err}`)
})

app.listen(port, () => {
	console.log('App is listening on port ' + port)
});


