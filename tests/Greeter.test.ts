import { Greeter } from "../src/greeter";
import { JavaScriptGreeter } from "../src/javascriptgreeterclass";

describe("Greeter class", () => {
  test("the constructor properly sets the greeting property", () => {
    const greeter = new Greeter("wats good");
    expect(greeter.greet("porkii")).toBe("wats good, porkii!");
  });
});
