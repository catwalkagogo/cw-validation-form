import Validation = require('cw-validation');
import Enumerable = require('linq');
import ChoiceField = require('../ChoiceField');
import CheckBoxOption = require('./CheckBoxOption');
import _ = require('underscore');
import Form = require('../Form');
import IPresenter = require('../presenters/IPresenter');
import CheckBoxPresenter = require('../presenters/CheckBox');

class CheckBoxField extends ChoiceField<CheckBoxField, CheckBoxOption> {
	public constructor(form: Validation.IForm, name: string, attr?: {}, options?: CheckBoxOption[], presenter: IPresenter<CheckBoxField> = null) {
		if(_.isUndefined(presenter)) {
			presenter = new CheckBoxPresenter();
		}

		super(form, name, attr, options, presenter);
	}
}

export = CheckBoxField;