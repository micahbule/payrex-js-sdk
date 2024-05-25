import assert from "assert";
import nock from "nock";
import { BASE_API_URL } from "../src/constants.js";
import HttpClient from "../src/http.js";
import InvalidAuthError from "../src/errors/invalid-auth.js";
import ResourceNotFoundError from "../src/errors/resource-not-found.js";
import InvalidRequestError from "../src/errors/invalid-request.js";

const server = nock(BASE_API_URL);

describe("http client", () => {
  let client: HttpClient;

  before(() => {
    client = new HttpClient("sampleApiKey");
  });

  it("should return response", async () => {
    server.get("/").reply(200, { foo: "bar" });

    const response = await client.send("get", "/");

    assert.deepEqual(response.statusCode, 200);
    assert.deepEqual(response.body, { foo: "bar" });
  });

  it("should return a status code error", async () => {
    server.get("/").reply(500);

    await assert.rejects(
      async () => await client.send("get", "/"),
      new Error("The server responded with a 500 status code")
    );
  });

  it("should return invalid auth error", async () => {
    server.get("/").reply(401);
    await assert.rejects(
      async () => await client.send("get", "/"),
      new InvalidAuthError()
    );
  });

  it("should return invalid request error", async () => {
    server.get("/").reply(400);
    await assert.rejects(
      async () => await client.send("get", "/"),
      new InvalidRequestError()
    );
  });

  it("should return invalid request error", async () => {
    server.get("/").reply(404);
    await assert.rejects(
      async () => await client.send("get", "/"),
      new ResourceNotFoundError()
    );
  });
});
