import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
  extra: string = "!";
  greet(name: string) {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume() {
    this.extra += "!";
  }
}
