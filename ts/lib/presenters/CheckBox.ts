import Presenter = require('./Presenter');
import ChoiceField = require('../ChoiceField');
import Dom = require('cw-dom');
import Enumerable = require('linq');

class CheckBox extends Presenter<ChoiceField<any, any>> {
	html(field: ChoiceField<any, any>, attr: Object): string {
		attr = _.extend(field.attr(), attr);

		var value = attr['value'];
		var optionsHtml = Enumerable
			.from(field.options)
			.select(opt => {
				var optAttr = opt.attr();
				optAttr['type'] = 'checkbox';
				optAttr['checked'] = _.contains(value, opt.value);
				optAttr['name'] = field.name + '[]';

				var label = optAttr['__label'];
				delete optAttr['__label'];
				var labelAttr = {
					'for' : optAttr['name']
				};

				return Dom.Html.tag('input', optAttr) + Dom.Html.tag('label', labelAttr, label);
			})
			.toArray()
			.join('');

		var html = optionsHtml;

		return html;

	}
}

export = CheckBox;