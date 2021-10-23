import { JavaScriptGreeter } from "../src/javascriptgreeterclass";

describe("JAVASCRIPT", () => {
  test("sets the thing", () => {
    const result = new JavaScriptGreeter("hello");
    expect(result.greet("porkii")).toBe("console.log('hello, porkii!')");
  });
});
