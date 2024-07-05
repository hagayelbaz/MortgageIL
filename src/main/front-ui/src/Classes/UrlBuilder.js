class UrlBuilder {
    constructor(base, path = '', queryString = '') {
        this.baseUrl = base.endsWith('/') ? base : `${base}`;
        this.path = path;
        this.queryString = queryString;
    }


    addPath(part) {
        const partStr = part.toString();
        if (this.path.endsWith('/') || partStr.startsWith('/')) {
            this.path += partStr;
        } else {
            this.path += `/${partStr}`;
        }
        return new UrlBuilder(this.baseUrl, this.path, this.queryString);
    }

    addQueryParam(key, value) {
        if (this.queryString === '') {
            this.queryString = `?${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        } else {
            this.queryString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        return new UrlBuilder(this.baseUrl, this.path, this.queryString);
    }

    toString() {
        return `${this.baseUrl}${this.path}${this.queryString}`;
    }

    valueOf() {
        return this.toString();
    }
}

export default function UrlBuilderFactory(base) {
    return new UrlBuilder(base);
}