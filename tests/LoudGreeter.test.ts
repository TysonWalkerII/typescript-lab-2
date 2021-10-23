import { LoudGreeter } from "../src/loudgreeter";

describe("LoudGreeter class", () => {
  test("doing the thing", () => {
    const loudGreeter = new LoudGreeter("Hello");
    expect(loudGreeter.greet("Mitch")).toBe("Hello,Mitch!!");
  });
  test("doing the thing", () => {
    const loudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Mitch")).toBe("Hello,Mitch!!!");
  });
});
