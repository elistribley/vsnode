const express = require('express');


const router = express.Router();
// express passes in the request and response objects for us
router.get('/getAll', (request, response) => {
    response.contentType('application/json') 
            .status(200)
            // converts object to json and puts in the response body
            .json(database); 
});
router.post('/create');
router.put('/update');
router.delete('/delete');

const app = express();
let idCounter = 3;
const database = [
    {
        id: 1,
        size: "LARGE",
        colour: "RED",
        snappy: false,
        species: "leatherback",
        doesKungFu: true,
        born: new Date('1989-05-22')
    },
    {
        id: 2,
        size: "LARGE",
        colour: "GREEN",
        snappy: true,
        species: "Turtle-ificus-snappy-icus",
        doesKungFu: false,
        born: new Date('1840-03-01')
    }
];
module.exports = router;