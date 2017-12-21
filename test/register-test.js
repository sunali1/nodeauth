// process.env.NODE_ENV = "test";
var supertest = require("supertest");
var should = require("should");
//This agent refers to the PORT the program is running
var app = supertest.agent("http://localhost:3000");

describe("Register", function(){
  it ('should return registration page', function(done){
    //calling home page api
    app
    .get('/users/register')
    .expect(200)
    .end(function(err, res){
      res.status.should.equal(200);
      done();
    });

  });
  it ("should save a registered name", function(done) {
    //testing the post router
    var profile = {
      name: 'test'
    };
    app
    .post('/users/register')
    .expect(200)
    .send(profile)
    .end(function(err, res){
      res.status.should.equal(200);
      done();
    });
  });
});
