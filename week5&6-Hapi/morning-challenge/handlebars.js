var Handlebars = require("handlebars");
var fs = require('fs');

var source = fs.readFileSync(__dirname + "/message.html")
var template = Handlebars.compile(source.toString());

function sayHello(){
  var obj = {
    title:"Hello World",
    post: "A bit of info about FAC!"
  }
  var html = template(obj);
  return html;
}

function listOutPeople(){
  var obj = {
    people: ["Dan Sofer", "Ines Teles", "Nelson Correira"]
  }
  var html = template(obj);
  console.log(html)
  return html;
}

function getInContact(){
  var obj = {
    email: "hello@foundersandcoders.com",
    number: '020835832442'
  }
  var html = template(obj);
  console.log(html)
  return html;
}

//Create a custom function helper to check the status.
Handlebars.registerHelper( "formatNumber", function ( number ){
    return '+44' + ' ' + number.substr(1,3) + ' ' + number.substr(4,4) + ' ' + number.substr(8,4);
});

module.exports = {
  sayHello: sayHello,
  listOutPeople: listOutPeople,
  getInContact: getInContact
}
