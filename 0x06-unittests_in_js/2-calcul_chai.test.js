const { chai } = require("chai");
const expect = chai.expect;

const calculateNumber = require("./2-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
  });
  it("should return -2", function () {
    expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
  });
  it("should return 2", function () {
    expect(calculateNumber("DIVIDE", 6, 3)).to.equal(2);
  });
  it("should return 5", function () {
    expect(calculateNumber("SUM", 1.4, 3.8)).to.equal(5);
  });
  it("should return 2", function () {
    expect(calculateNumber("SUBTRACT", 4.8, 3.4)).to.equal(2);
  });
  it("should return 2", function () {
    expect(calculateNumber("DIVIDE", 6.2, 3.2)).to.equal(2);
  });
  it("should return Error", function () {
    expect(calculateNumber("DIVIDE", 6.2, 0)).to.equal("Error");
  });
});
