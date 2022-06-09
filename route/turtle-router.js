const { response } = require('express');
const express = require('express');
const { request } = require('http');


const router = express.Router();
// Express passes in the request and response objects for us
router.get('/getAll', (request, response) => {
    response.contentType('application/json') 
            .status(200)
            // Converts object to json and puts in the response body
            .json(database); 
});
router.post('/create');
router.put('/update');
router.delete('/delete/:id', (request, response, next) => {
    const id = Number(request.params.id);
    if (isNaN(id)) return next ({ statusCode:400, message: 'ID must be a number'});


    //find by id
    const index = database.findIndex(function(turtle){
            return turtle.id == id;
    });

});



module.exports = router;
//IN MEM DATA
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