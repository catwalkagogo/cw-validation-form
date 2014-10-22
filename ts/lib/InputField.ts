import Field = require('./Field');

class InputField<TSelf extends InputField<any>> extends Field<TSelf> {
	public get value(): any {
		return this.attr('value');
	}

	public set value(value: any) {
		this.attr('value', value);
	}
}

export = InputField;