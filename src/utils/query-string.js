export function parse(s) {
    const query = {};
    s.replace("?", "")
        .split("&")
        .forEach(e => {
            const [key, value] = e.split("=");
            query[key] = value;
        });
    return query;
}

export function stringify(q) {
    let queryString = "";
    if (typeof q === "object") {
        Object.entries(q).forEach(([key, value]) => {
            queryString += `${key}=${value}&`;
        });
        queryString = queryString.slice(0, queryString.length - 1);
    }
    return queryString;
}

export default {
    parse,
    stringify
};