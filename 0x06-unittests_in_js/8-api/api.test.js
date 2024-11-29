const request = require("request");
const { expect } = require("chai");

describe("API integration test", () => {
  const API_URL = "http://localhost:7865";

  it("test response status code of GET/ of the API", (done) => {
    request.get(`${API_URL}/`, (_, res, _) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("test response body of GET/ of the API", (done) => {
    request.get(`${API_URL}/`, (_, _, body) => {
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("test for correct path of GET request", (done) => {
    request.get(`${API_URL}/`, (_, res, _) => {
      expect(res.request.uri.path).to.be.equal("/");
      done();
    });
  });
});
