import FormBuilder, { type FormOptions } from "./builders/form-builder.js";

export default class HexletCode {
  static formFor(
    template: object,
    options: FormOptions,
    buildForm: (form: Pick<FormBuilder, "input">) => void,
  ): string {
    const builder = new FormBuilder(template);
    buildForm(builder);
    return builder.build(options);
  }
}
