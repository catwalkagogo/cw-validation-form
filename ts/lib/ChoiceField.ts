import Validation = require('cw-validation');
import Enumerable = require('linq');
import InputField = require('./InputField');
import ChoiceOption = require('./ChoiceOption');
import IPresenter = require('./presenters/IPresenter');

class ChoiceField<TSelf extends ChoiceField<any, any>, TOption extends ChoiceOption> extends InputField<TSelf> {
	private _options: TOption[] = [];

	public constructor(form: Validation.IForm, name: string, attr?: {}, options?: TOption[], presenter: IPresenter<TSelf> = null) {
		super(form, name, attr, presenter);
		if(options) {
			options.forEach(option => this._options.push(option));
		}
	}

	public get options(): ChoiceOption[] {
		return this._options;
	}
}

export = ChoiceField;