const assert = require("assert");

const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
  });
  it("should return -2", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 6, 3), 2);
  });
  it("should return 5", function () {
    assert.strictEqual(calculateNumber("SUM", 1.4, 3.8), 5);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 4.8, 3.4), 2);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 6.2, 3.2), 2);
  });
  it("should return Error", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 6.2, 0), "Error");
  });
});
