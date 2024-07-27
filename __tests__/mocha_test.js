const sum = require("../src/sum");
const assert = require("assert");

describe("sum", function () {
  it("1 + 2 = 3", function (done) {
    assert.equal(sum(1, 2), 3);
    done();
  });
});
