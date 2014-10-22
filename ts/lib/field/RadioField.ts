import Validation = require('cw-validation');
import Enumerable = require('linq');
import ChoiceField = require('../ChoiceField');
import RadioOption = require('./RadioOption');
import _ = require('underscore');
import Form = require('../Form');
import IPresenter = require('../presenters/IPresenter');
import RadioPresenter = require('../presenters/Radio');

class RadioField extends ChoiceField<RadioField, RadioOption> {
	public constructor(form: Validation.IForm, name: string, attr?: {}, options?: RadioOption[], presenter: IPresenter<RadioField> = null) {
		if(_.isUndefined(presenter)) {
			presenter = new RadioPresenter();
		}

		super(form, name, attr, options, presenter);
	}
}

export = RadioField;