declare function split(str: string): {
    data: string;
    content: string;
    separator: string;
    prefixSeparator: boolean;
} | {
    content: string;
    data?: undefined;
    separator?: undefined;
    prefixSeparator?: undefined;
};
interface ParseOptions {
    defaultTimeZone?: string;
}
declare function parse(str: string, options?: ParseOptions): any;
declare function escapeYAML(str: string): string;
interface StringifyOptions {
    mode?: 'json' | '';
    prefixSeparator?: boolean;
    separator?: string;
}
declare function stringify(obj: any, options?: StringifyOptions): any;
export { parse, split, escapeYAML as escape, stringify };
