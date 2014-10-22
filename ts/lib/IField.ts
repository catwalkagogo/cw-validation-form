interface IField {
	render(callback: (error: Error, html: string) => void): void;
	render(attr: Object, callback: (error: Error, html: string) => void): void;
	render(attrOrCallback: any, callback?: (error: Error, html: string) => void): void;
}