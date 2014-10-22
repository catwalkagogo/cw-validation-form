declare module "cw-form" {

import Validation = require('cw-validation');

// ts/lib/Field.d.ts
class Field<TSelf extends Validation.ValidationField<any>> extends Validation.ValidationField<TSelf> {
    private _attr;
    constructor(form: Form, name: string, attr?: Object);
    public attr(): any;
    public attr(key: string): any;
    public attr(key: string, value: any): void;
    public attr(data: Object): void;
    public render(callback: (error: Error, html: string) => void): void;
    public render(attr: Object, callback: (error: Error, html: string) => void): void;
    public renderImpl(attr: Object, callback: (error: Error, html: string) => void): void;
    public html(attr?: Object): string;
    public value : any;
}
export = Field;

// ts/lib/Form.d.ts
class Form extends ValidationForm {
    public addText(name: string, attr?: {}): TextField;
    public addTextArea(name: string, attr?: {}): TextAreaField;
    public addSelect(name: string, attr?: {}, options?: SelectOption[]): SelectField;
    public addSelect(name: string, attr?: {}, options?: {}): SelectField;
    public addRadio(name: string, attr?: {}, options?: RadioOption[]): RadioField;
    public addRadio(name: string, attr?: {}, options?: {}): RadioField;
    public addCheckBox(name: string, attr?: {}, options?: CheckBoxOption[]): CheckBoxField;
    public addCheckBox(name: string, attr?: {}, options?: {}): CheckBoxField;
}
export = Form;

}
