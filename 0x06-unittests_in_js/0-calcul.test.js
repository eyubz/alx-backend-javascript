const assert = require("assert");

const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("should return 4", function () {
    assert.strictEqual(calculateNumber(0.1, 3.7), 4);
  });
  it("should return 5", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("should return 6", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it("should return 1", function () {
    assert.strictEqual(calculateNumber(0, 0.8), 1);
  });
  it("should return Nan", function () {
    assert.strictEqual(calculateNumber("hi", "bye"), NaN);
  });
  it("should return Nan", function () {
    assert.strictEqual(calculateNumber([], {}), NaN);
  });
  it("should return Nan", function () {
    assert.strictEqual(calculateNumber("hi", 2), NaN);
  });
  it("should return Nan", function () {
    assert.strictEqual(calculateNumber(2, "hi"), NaN);
  });
});
