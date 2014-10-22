import Presenter = require('./Presenter');
import ChoiceField = require('../ChoiceField');
import Dom = require('cw-dom');
import Enumerable = require('linq');

class Select extends Presenter<ChoiceField<any, any>> {
	html(field: ChoiceField<any, any>, attr: Object): string {
		attr = _.extend(field.attr(), attr);

		var value = attr['value'];
		var options = field.options;

		var optionsHtml = Enumerable
			.from(options)
			.select(opt => {
				var optAttr = opt.attr();
				if(optAttr['value'] == field.value) {
					optAttr['selected'] = true;
				}
				delete optAttr['__content'];
				Dom.Html.tag('option', optAttr, optAttr['__content']);
			})
			.toArray()
			.join('');

		var html = Dom.Html.tag('select', attr, optionsHtml);

		return html;
	}
}

export = Select;