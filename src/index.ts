import Tag from "./components/tag.js";

export default class HexletCode {
  static formFor(
    _template: object,
    options: { url?: string },
    buildForm: (form: object) => void,
  ): string {
    buildForm({});

    return new Tag("form", {
      action: options.url ?? "#",
      method: "post",
    }).toString();
  }
}
