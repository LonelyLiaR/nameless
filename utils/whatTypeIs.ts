const { assign, create, freeze } = Object;

/**
 * Get String Primitive of the value, the result looks like this: `[object Type]`.
 * @param value Any type value.
 */
export const getPrimitive = (value: any): string => {
  return Object.prototype.toString.call(value);
};

export const isString = (value: any): boolean => {
  return typeof value === "string" || getPrimitive(value) === "[object String]";
};

export const isNumber = (value: any): boolean => {
  return typeof value === "number" || getPrimitive(value) === "[object Number]";
};

export const isBoolean = (value: any): boolean => {
  return (
    typeof value === "boolean" || getPrimitive(value) === "[object Boolean]"
  );
};

export const isObject = (value: any): boolean => {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
};

export const isObjectLike = (value: any): boolean => {
  return value !== null && typeof value === "object";
};

export const isArguments = (value: any): boolean => {
  return isObjectLike(value) && getPrimitive(value) === "[object Arguments]";
};

export default freeze(
  assign(create(null), {
    getPrimitive,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isObjectLike,
    isArguments,
  })
);
