import UrlBuilderFactory from "./UrlBuilder";

class Endpoints {
    static get BASE_URL() {
        return "http://localhost:8080";
    }

    static get API_VERSION() {
        return "api/v1";
    }

    static get BASE_ENDPOINT() {
        return UrlBuilderFactory(this.BASE_URL)
            .addPath(this.API_VERSION);
    }

    static get USERS_ENDPOINT() {
        return this.BASE_ENDPOINT
            .addPath("user");
    }

    static get BORROWERS_ENDPOINT() {
        return this.BASE_ENDPOINT
            .addPath("borrowers");
    }

}

export default Endpoints;