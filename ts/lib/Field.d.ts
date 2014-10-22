import Form = require('./Form');
import Validation = require('cw-validation');
declare class Field<TSelf extends Validation.ValidationField<any>> extends Validation.ValidationField<TSelf> {
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
