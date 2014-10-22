import Validation = require('cw-validation');
import Enumerable = require('linq');
import ChoiceField = require('../ChoiceField');
import SelectOption = require('./SelectOption');
import _ = require('underscore');
import Form = require('../Form');
import IPresenter = require('../presenters/IPresenter');
import SelectPresenter = require('../presenters/Select');

class SelectField extends ChoiceField<SelectField, SelectOption> {
	public constructor(form: Validation.IForm, name: string, attr?: {}, options?: SelectOption[], presenter: IPresenter<SelectField> = null) {
		if(_.isUndefined(presenter)) {
			presenter = new SelectPresenter();
		}

		super(form, name, attr, options, presenter);
	}
}

export = SelectField;