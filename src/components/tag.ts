import { tagsTypes } from "./tag-types.js";

export default class Tag {
  constructor(
    private readonly name: string,
    private readonly attributes: Record<string, string | number> = {},
    private readonly content: string = "",
  ) {}

  toString(): string {
    const parts = [`<${this.name}`];
    for (const [name, value] of Object.entries(this.attributes)) {
      const escValue = String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");

      parts.push(` ${name}="${escValue}"`);
    }
    parts.push(">");

    if (!tagsTypes.has(this.name.toLowerCase())) {
      parts.push(this.content, `</${this.name}>`);
    }
    return parts.join("");
  }
}
