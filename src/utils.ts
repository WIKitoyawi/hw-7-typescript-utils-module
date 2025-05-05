import { StringUtils } from "./types";

export const stringUtils: StringUtils = {
  capitalize: (input) => input.charAt(0).toUpperCase() + input.slice(1),
  trim: (input) => input.trim(),
  repeat: (input, times) => input.repeat(times),
  toSnakeCase: (input) =>
    input
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_"),
  toUpperCase: (input) => input.toUpperCase(),
  toLowerCase: (input) => input.toLowerCase(),
  isEmpty: (input) => input.trim().length === 0,
  reverseString: (input) => input.split("").reverse().join(""),
  truncate: (input, length) =>
    input.length > length ? input.slice(0, length) + "..." : input,
  removeSpaces: (input) => input.replace(/\s+/g, ""),
  countWords: (input) => input.trim().split(/\s+/).length,
  startsWith: (input, start) => input.startsWith(start),
  endsWith: (input, end) => input.endsWith(end),
  replaceAll: (input, search, replacement) =>
    input.split(search).join(replacement),
};
