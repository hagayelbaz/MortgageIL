class UrlBuilder {
    constructor(base, path = '', queryString = '') {
        this.baseUrl = base.endsWith('/') ? base : `${base}`;
        this.path = path;
        this.queryString = queryString;
    }


    addPath(part) {
        if (this.path.endsWith('/') || part.startsWith('/')) {
            this.path += part;
        } else {
            this.path += `/${part}`;
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