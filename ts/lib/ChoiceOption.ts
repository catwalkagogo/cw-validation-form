import Core = require('cw-core');
import Accessor = Core.Accessor;

class ChoiceOption {
	private _attr: Accessor;

	public attr(): any;
	public attr(key: string): any;
	public attr(key: string, value: any): void;
	public attr(data: Object): void;
	public attr(keyOrData?: any, value?: any): any {
		return this._attr.access(keyOrData, value);
	}

	public get value(): any {
		return this.attr('value');
	}

	public set value(value: any) {
		this.attr('value', value);
	}
}

export = ChoiceOption;