const { assign, create, freeze } = Object;

export const parse = (s: string): AnyObject<string> => {
  const query: AnyObject<string> = {};
  if (!!s) {
    s.replace("?", "")
      .split("&")
      .forEach((e) => {
        const [key, value] = e.split("=");
        if (!!key) {
          query[key] = value;
        }
      });
  }
  return query;
};

export const stringify = (q: AnyObject<string>): string => {
  let qs = "";
  if (typeof q === "object" && q !== null) {
    Object.entries(q).forEach(([key, value]) => {
      qs += `${key}=${value}&`;
    });
    qs = qs.slice(0, qs.length - 1);
  }
  return qs;
};

export default freeze(
  assign(create(null), {
    parse,
    stringify,
  })
);
