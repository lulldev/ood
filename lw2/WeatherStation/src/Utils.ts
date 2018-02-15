/**
 * Make first char upper
 *
 * @param {string} str
 * @returns {string} str with first upper case char
 */
export const ucFirst = (str: string) : string => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};
