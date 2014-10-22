import Validation = require('cw-validation');
import TextField = require('./field/TextField');
import TextAreaField = require('./field/TextAreaField');
import SelectField = require('./field/SelectField');
import SelectOption = require('./field/SelectOption');
import RadioField = require('./field/RadioField');
import RadioOption = require('./field/RadioOption');
import CheckBoxField = require('./field/CheckBoxField');
import CheckBoxOption = require('./field/CheckBoxOption');
declare class Form extends ValidationForm {
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
