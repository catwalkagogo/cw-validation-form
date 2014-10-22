import Dom = require('cw-dom');
import ChoiceOption = require('../ChoiceOption');
import Enumerable = require('linq');

class CheckBoxOption extends ChoiceOption {
	public constructor(label: string= null, value: string= null) {
		super();
		this.label = label;
		this.value = value;
	}

	public get value(): string {
		return this.attr('value');
	}

	public set value(value: string) {
		this.attr('value', value);
	}

	public get label(): string {
		return this.attr('label');
	}

	public set label(label: string) {
		this.attr('label', label);
	}

	public get disabled(): boolean {
		return this.attr('disabled');
	}

	public set disabled(disabled: boolean) {
		this.attr('disabled', disabled);
	}

	public get checked(): boolean {
		return this.attr('checked');
	}

	public set checked(checked: boolean) {
		this.attr('checked', checked);
	}

	public static createFrom(options: {}): CheckBoxOption[] {
		return Enumerable
			.from(options)
			.select(p => new CheckBoxOption(p.value, p.key))
			.toArray();
	}
}

export = CheckBoxOption;