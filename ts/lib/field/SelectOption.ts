import Dom = require('cw-dom');

import ChoiceOption = require('../ChoiceOption');
import Enumerable = require('linq');

class SelectOption extends ChoiceOption {
	public constructor(content: string, value: string) {
		super();
		this.content = content;
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

	public get content(): string {
		return this.attr('__content');
	}

	public set content(label: string) {
		this.attr('__content', label);
	}

	public get disabled(): boolean {
		return this.attr('disabled');
	}

	public set disabled(disabled: boolean) {
		this.attr('disabled', disabled);
	}

	public get selected(): boolean {
		return this.attr('selected');
	}

	public set selected(selected: boolean) {
		this.attr('selected', selected);
	}

	public static createFrom(options: {}): SelectOption[] {
		return Enumerable
			.from(options)
			.select(p => new SelectOption(p.value, p.key))
			.toArray();
	}
}

export = SelectOption;