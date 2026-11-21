import { expect, test } from "vitest";
import HexletCode from "../src/index.js";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("empty form", () => {
  const html = HexletCode.formFor(template, {}, () => {});
  expect(html).toBe('<form action="#" method="post"></form>');
});

test("form with url", () => {
  const html = HexletCode.formFor(template, { url: "/users" }, () => {});
  expect(html).toBe('<form action="/users" method="post"></form>');
});

const formStart = '<form action="#" method="post">';

test("input and textarea", () => {
  const html = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
    f.input("job", { as: "textarea" });
  });

  expect(html).toBe(
    formStart +
      '<label for="name">Name</label>' +
      '<input name="name" type="text" value="rob">' +
      '<label for="job">Job</label>' +
      '<textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
  );
});

test("input attributes", () => {
  const html = HexletCode.formFor(template, {}, (f) => {
    f.input("name", { class: "user-input" });
    f.input("job");
  });

  expect(html).toBe(
    formStart +
      '<label for="name">Name</label>' +
      '<input name="name" type="text" value="rob" class="user-input">' +
      '<label for="job">Job</label>' +
      '<input name="job" type="text" value="hexlet"></form>',
  );
});

test("textarea size", () => {
  const html = HexletCode.formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", rows: 50, cols: 50 }),
  );

  expect(html).toBe(
    formStart +
      '<label for="job">Job</label>' +
      '<textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
  );
});

test("unknown field", () => {
  expect(() => HexletCode.formFor(template, {}, (f) => f.input("age"))).toThrow(
    new Error("Field 'age' not exist in template"),
  );
});

test("submit", () => {
  const html = HexletCode.formFor(template, {}, (f) => f.submit());

  expect(html).toBe(formStart + '<input type="submit" value="Save"></form>');
});

test("submit with text", () => {
  const html = HexletCode.formFor(template, {}, (f) => {
    f.input("name");
    f.submit("Wow");
  });

  expect(html).toBe(
    formStart +
      '<label for="name">Name</label>' +
      '<input name="name" type="text" value="rob">' +
      '<input type="submit" value="Wow"></form>',
  );
});
