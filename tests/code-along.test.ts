import { Player, Timer } from "../src/code-along";

describe("Player class", () => {
  test("the constructor properly sets the name property", () => {
    const result = new Player("Kyrie Irving", 11);
    expect(result.name).toBe("Kyrie Irving");
    expect(result.jersey).toBe(11);
  });
});

describe("Timer class", () => {
  test("the constructor properly sets the name property", () => {
    const timer = new Timer("track");
    expect(timer.name).toBe("track");
  });
  test("the constructor properly sets the time property", () => {
    const timer = new Timer("track");
    expect(timer.timer).toBe(0);
  });
});
