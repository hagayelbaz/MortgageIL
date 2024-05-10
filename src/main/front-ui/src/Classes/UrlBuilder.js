class UrlBuilder {
    constructor(base) {
        this.baseUrl = base.endsWith('/') ? base : `${base}/`;
        this.path = '';
        this.queryString = '';
    }

    addPath(part) {
        if (this.path.endsWith('/') || part.startsWith('/')) {
            this.path += part;
        } else {
            this.path += `/${part}`;
        }
        return this;
    }

    addQueryParam(key, value) {
        if (this.queryString === '') {
            this.queryString = `?${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        } else {
            this.queryString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        return this;
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