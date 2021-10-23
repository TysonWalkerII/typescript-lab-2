import { HtmlGreeter } from "../src/Htmlgreeterclass";

describe("HtmlGreeter class", () => {
  test("the constructor properly sets the tag Name property", () => {
    const htmlGreeter = new HtmlGreeter("Hello", "div");
    expect(htmlGreeter.tagName).toBe("div");
  });
  test("2ndthing", () => {
    const htmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreeter.greet("Mitch")).toBe("<div>Hello, Mitch!</div>");
  });
});
