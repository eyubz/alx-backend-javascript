const assert = require("assert");

const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber(1, 3, "SUM"), 4);
  });
  it("should return -2", function () {
    assert.strictEqual(calculateNumber(1, 3, "SUBTRACT"), -2);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber(6, 3, "DIVIDE"), 2);
  });
  it("should return 4", function () {
    assert.strictEqual(calculateNumber(1, 3, "SUM"), 4);
  });
  it("should return -2", function () {
    assert.strictEqual(calculateNumber(1, 3, "SUBTRACT"), -2);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber(6, 3, "DIVIDE"), 2);
  });
});
