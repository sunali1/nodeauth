// process.env.NODE_ENV = "test";
const app = require("../app.js");
const assert = require("assert");
const Browser = require("zombie");
browser = new Browser();
url = "http://localhost:3000/";

describe("/", function() {
  it("shows an index page", function(done) {
    browser.visit(url, function() {
      assert.ok(this.browser.success);
      assert.equal(this.browser.text("h2"), "Members Area");
      done();
    });
  });
});
