import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagname: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string) {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}
