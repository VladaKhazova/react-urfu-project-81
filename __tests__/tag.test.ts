import { expect, test } from "vitest";
import Tag from "../src/components/tag.js";

const label = new Tag("label", { for: "email" }, "Email").toString();

const examples: [Tag, string][] = [
  [new Tag("br"), "<br>"],
  [new Tag("img", { src: "path/img" }), '<img src="path/img">'],
  [new Tag("input", { type: "submit", value: "Save" }), '<input type="submit" value="Save">'],
  [new Tag("label", {}, "Email"), "<label>Email</label>"],
  [new Tag("label", { for: "email" }, "Email"), '<label for="email">Email</label>'],
  [new Tag("div"), "<div></div>"],
  [
    new Tag("form", { method: "post" }, label),
    '<form method="post"><label for="email">Email</label></form>',
  ],
  [new Tag("input", { value: '"A&B"' }), '<input value="&quot;A&amp;B&quot;">'],
  [new Tag("hr"), "<hr>"],
  [new Tag("meta", { charset: "utf-8" }), '<meta charset="utf-8">'],
  [
    new Tag("link", { rel: "stylesheet", href: "/style.css" }),
    '<link rel="stylesheet" href="/style.css">',
  ],
  [
    new Tag("textarea", { cols: 20, rows: 40, name: "job" }, "hexlet"),
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>',
  ],
  [new Tag("button", { type: "submit" }, "Save"), '<button type="submit">Save</button>'],
  [new Tag("BR"), "<BR>"],
];

for (const [tag, expected] of examples) {
  test(`renders ${expected}`, () => {
    const html = tag.toString();
    expect(html).toBe(expected);
  });
}
