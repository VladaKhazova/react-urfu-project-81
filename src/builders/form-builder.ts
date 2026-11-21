import Tag from "../components/tag.js";

export type FormOptions = {
  url?: string;
  method?: string;
};

type HtmlAttributes = Record<string, string | number>;

type InputOptions = {
  [key: string]: string | number | HtmlAttributes | undefined;
  as?: "input" | "textarea";
  label?: string;
  labelHtml?: HtmlAttributes;
};

export default class FormBuilder {
  private readonly fields: Tag[] = [];

  constructor(private readonly template: object) {}

  input(name: string, options: InputOptions = {}): void {
    if (!Object.hasOwn(this.template, name)) {
      throw new Error(`Field '${name}' not exist in template`);
    }

    const value = String((this.template as Record<string, unknown>)[name]);
    const { as, label: labelText, labelHtml, ...inputHtml } = options;

    const attributes = Object.fromEntries(
      Object.entries(inputHtml).filter(
        (entry): entry is [string, string | number] =>
          typeof entry[1] === "string" || typeof entry[1] === "number",
      ),
    );

    const caption = labelText ?? name.charAt(0).toUpperCase() + name.slice(1);
    const label = new Tag(
      "label",
      { for: name, ...labelHtml },
      caption.replaceAll("&", "&amp;").replaceAll("<", "&lt;"),
    );

    if (as === "textarea") {
      const text = value.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
      const field = new Tag("textarea", { cols: 20, rows: 40, name, ...attributes }, text);
      this.fields.push(label, field);
      return;
    }

    const field = new Tag("input", { name, type: "text", value, ...attributes });
    this.fields.push(label, field);
  }

  submit(value = "Save"): void {
    this.fields.push(new Tag("input", { type: "submit", value }));
  }

  build(options: FormOptions): string {
    const content = this.fields.reduce((html, field) => html + field.toString(), "");

    return new Tag(
      "form",
      { method: options.method ?? "post", action: options.url ?? "#" },
      content,
    ).toString();
  }
}
