const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("Should return 4", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("Should return -5", function () {
    assert.strictEqual(calculateNumber(-3, -2), -5);
  });

  it("Should return 5", function () {
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
  });

  it("Should return -5", function () {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
  });

  it("Should return 5", function () {
    assert.strictEqual(calculateNumber(1.45, 3.79), 5);
  });
});
