const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    return res.json({message : 'Hello World'})
})


app.listen(4000, () => console.log('server is listening on port 4000'))