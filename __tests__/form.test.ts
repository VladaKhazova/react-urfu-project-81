import { expect, test } from "vitest";
import HexletCode from "../src/index.js";

const template = { name: "vlada", job: "lolcorporated", gender: "w" };

test("empty form", () => {
  const html = HexletCode.formFor(template, {}, () => {});
  expect(html).toBe('<form action="#" method="post"></form>');
});

test("form with url", () => {
  const html = HexletCode.formFor(template, { url: "/users" }, () => {});
  expect(html).toBe('<form action="/users" method="post"></form>');
});
