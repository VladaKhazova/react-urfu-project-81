import Tag from "../components/tag.js";

export type FormOptions = {
  url?: string;
  method?: string;
};

type InputOptions = Record<string, string | number> & {
  as?: "input" | "textarea";
};

export default class FormBuilder {
  private readonly fields: Tag[] = [];

  constructor(private readonly template: object) {}

  input(name: string, options: InputOptions = {}): void {
    if (!Object.hasOwn(this.template, name)) {
      throw new Error(`Field '${name}' not exist in template`);
    }

    const value = String((this.template as Record<string, unknown>)[name]);
    const { as, ...attributes } = options;

    if (as === "textarea") {
      const text = value.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
      const field = new Tag("textarea", { cols: 20, rows: 40, name, ...attributes }, text);
      this.fields.push(field);
      return;
    }

    const field = new Tag("input", { name, type: "text", value, ...attributes });
    this.fields.push(field);
  }

  build(options: FormOptions): string {
    const content = this.fields.reduce((html, field) => html + field.toString(), "");

    return new Tag(
      "form",
      { action: options.url ?? "#", method: options.method ?? "post" },
      content,
    ).toString();
  }
}
