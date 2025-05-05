export type StringTransformer = (input: string) => string;

export interface StringUtils {
  capitalize: StringTransformer;
  trim: StringTransformer;
  repeat: (input: string, times: number) => string;
  toSnakeCase: StringTransformer;
  toUpperCase: StringTransformer;
  toLowerCase: StringTransformer;
  isEmpty: (input: string) => boolean;
  reverseString: StringTransformer;
  truncate: (input: string, length: number) => string;
  removeSpaces: StringTransformer;
  countWords: (input: string) => number;
  startsWith: (input: string, start: string) => boolean;
  endsWith: (input: string, end: string) => boolean;
  replaceAll: (input: string, search: string, replacement: string) => string;
}
