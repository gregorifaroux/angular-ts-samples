// https://github.com/visionmedia/express
// npm install express

var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/'));           // makes root folder be 'public' site
app.listen(port);

console.log("Your server is started on port " + port);

var users = [                                      // our db with users
    {uniqueID: "0", email: "email-0", firstName: 'firstName-0', lastName: 'lastName-0', password : 'password-1', roles: []},
    {uniqueID: "1", email: "email-1", firstName: 'firstName-1', lastName: 'lastName-1', password : 'password-2', roles: []},
    {uniqueID: "2", email: "email-2", firstName: 'firstName-2', lastName: 'lastName-2', password : 'password-3', roles: []}
];

var findById = function(id) {

    var index = -1;
    for (var i =0 ; i < users.length; i++) {
        if (users[i].uniqueID == id) {
            index = i;
        }
    }
    var user = (index != -1) ? users[index] : {};

    return {
        "index" : index,
        "user" : user
    }
};

app.get('/app/users/:id', function(req, res){

    var id = req.params.id;

    var foundUser = findById(id);

    return res.send(foundUser);
});

