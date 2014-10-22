declare module "cw-dom" {

// ts/index.d.ts
export function createNode(tagName: string): Node;
export function createNode(tagName: string, attr: {}): Node;
export function createNode(tagName: string, contents: any[]): Node;
export function createNode(tagName: string, attr: {}, contents: any[]): Node;
export function createRawHtml(html: string): Object;
export var _: typeof createNode;
export var $: typeof createRawHtml;

// ts/lib/Html.d.ts
class Html {
    static escape(html: string): string;
    static tag(name: string, attrs?: Object, content?: string): string;
}

// ts/lib/Node.d.ts
class Node {
    private _tagName;
    private _contents;
    private _attr;
    constructor(tagName: string, attr?: {}, contents?: any[]);
    public attr(): any;
    public attr(key: string): any;
    public attr(key: string, value: any): void;
    public attr(data: Object): void;
    public innerHtml : string;
    public outerHtml : string;
    public render(attrToOverride?: Object): string;
    static createRawHtml(html: string): Object;
}

}
