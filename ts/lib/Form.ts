import Field = require('./Field');
import Validator = require('validator');
import Enumerable = require('linq');
import _ = require('underscore');

import Validation = require('cw-validation');

import TextField = require('./field/TextField');
import TextAreaField = require('./field/TextAreaField');
import SelectField = require('./field/SelectField');
import SelectOption = require('./field/SelectOption');
import RadioField = require('./field/RadioField');
import RadioOption = require('./field/RadioOption');
import CheckBoxField = require('./field/CheckBoxField');
import CheckBoxOption = require('./field/CheckBoxOption');

class Form extends Validation.Form{
	public addText(name: string, attr?: {}): TextField {
		return <TextField>this.addField(new TextField(this, name, attr));
	}

	public addTextArea(name: string, attr?: {}): TextAreaField {
		return <TextAreaField>this.addField(new TextAreaField(this, name, attr));
	}

	public addSelect(name: string, attr?: {}, options?: SelectOption[]): SelectField;
	public addSelect(name: string, attr?: {}, options?: {}): SelectField;
	public addSelect(name: string, attr?: {}, options?: any): SelectField{
		var _options = (options)
			? _.isArray(options)
				? options
				: SelectOption.createFrom(options)
			: [];
		return <SelectField>this.addField(new SelectField(this, name, _options));
	}

	public addRadio(name: string, attr?: {}, options?: RadioOption[]): RadioField;
	public addRadio(name: string, attr?: {}, options?: {}): RadioField;
	public addRadio(name: string, attr?: {}, options?: any): RadioField {
		var _options = (options)
			? _.isArray(options)
				? options
				: RadioOption.createFrom(options)
			: [];
		return <RadioField>this.addField(new RadioField(this, name, _options));
	}

	public addCheckBox(name: string, attr?: {}, options?: CheckBoxOption[]): CheckBoxField;
	public addCheckBox(name: string, attr?: {}, options?: {}): CheckBoxField;
	public addCheckBox(name: string, attr?: {}, options?: any): CheckBoxField {
		var _options = (options)
			? _.isArray(options)
			? options
			: CheckBoxOption.createFrom(options)
			: [];
		return <CheckBoxField>this.addField(new CheckBoxField(this, name, _options));
	}
}

var form = new Form();

export = Form;