import UrlBuilderFactory from "./UrlBuilder";

class Endpoints {

    static BASE_URL = "http://localhost:8080";
    static API_VERSION = "api/v1";
    static INTERNAL = "internal";
    static EXTERNAL = "external";
    static DATA = "data";
    static CALCULATOR = "calc/mortgage";
    static AUTH = "auth";
    static TOKEN = "csrf-token";
    static USER = "user";
    static BORROWER = "borrower";
    static MORTGAGE_GROUP = "mortgage-group";
    static MORTGAGE_PLAN = "mortgage-plan";

    //TODO: Change to production URL
    static get BASE_URL_END_POINT() {
        return UrlBuilderFactory(this.BASE_URL);
    }

    static get TOKEN_ENDPOINT() {
        return this.BASE_URL_END_POINT.addPath(this.AUTH).addPath(this.TOKEN);
    }

    static get API_VERSION_END_POINT() {
        return this.BASE_URL_END_POINT.addPath(this.API_VERSION);
    }

    static get INTERNAL_API_VERSION_END_POINT() {
        return this.API_VERSION_END_POINT.addPath(this.INTERNAL);
    }

    static get EXTERNAL_API_VERSION_END_POINT() {
        return this.API_VERSION_END_POINT.addPath(this.EXTERNAL);
    }

    static get CALCULATOR_ENDPOINT() {
        return this.INTERNAL_API_VERSION_END_POINT.addPath(this.CALCULATOR);
    }

    static get AMORTIZATION_SCHEDULE_ENDPOINT() {
        return this.CALCULATOR_ENDPOINT.addPath("amortization-schedule");
    }

    static get DATA_ENDPOINT() {
        return this.API_VERSION_END_POINT.addPath(this.DATA);
    }

    static get USER_ENDPOINT() {
        return this.API_VERSION_END_POINT.addPath(this.USER);
    }

    static get BORROWER_ENDPOINT() {
        return this.API_VERSION_END_POINT.addPath(this.BORROWER);
    }

    static get MORTGAGE_GROUP_ENDPOINT() {
        return this.API_VERSION_END_POINT.addPath(this.MORTGAGE_GROUP);
    }

    static get MORTGAGE_PLAN_ENDPOINT() {
        return this.API_VERSION_END_POINT.addPath(this.MORTGAGE_PLAN);
    }

    static get USER_DATA_ENDPOINT() {
        return this.USER_ENDPOINT.addPath("default");
    }

    static get INTEREST() {
        const createInterestRateEndpoint = (suffix) =>
            this.DATA_ENDPOINT.addPath("interest-rate").addPath(suffix);

        return {
            BASE_ENDPOINT: createInterestRateEndpoint("base-rate"),
            CURRENT_ENDPOINT: createInterestRateEndpoint("current"),
            LAST_YEAR_ENDPOINT: createInterestRateEndpoint("last-12-months")
        }
    }

    static get CPI() {
        const createCpiEndpoint = (suffix) =>
            this.DATA_ENDPOINT.addPath("cpi").addPath(suffix);

        return {
            PERCENTAGE_CHANGE_ENDPOINT: createCpiEndpoint("percentage-change"),
            HISTORIC_POINTS_ENDPOINT: createCpiEndpoint("historic-points"),
            LAST_YEAR_CHANGE_ENDPOINT: createCpiEndpoint("last-year-change"),
            LAST_MONTH_CHANGE_ENDPOINT: createCpiEndpoint("last-month-change"),
            LAST_YEAR_CHANGE_THIS_MONTH_ENDPOINT: createCpiEndpoint("last-year-change-this-month"),
        }
    }

    static get INFLATION_EXPECTATIONS() {
        const createInflationExpectationsEndpoint = (suffix) =>
            this.DATA_ENDPOINT.addPath("inflation-expectations").addPath(suffix);

        return {
            NEXT_YEAR_ENDPOINT: createInflationExpectationsEndpoint("next-year"),
            NEXT_NEXT_YEAR_ENDPOINT: createInflationExpectationsEndpoint("next-next-year"),
            FIVE_YEARS_ENDPOINT: createInflationExpectationsEndpoint("five-years"),
            AVERAGE_TWELVE_MONTHS_ENDPOINT: createInflationExpectationsEndpoint("average-twelve-months"),
            THIRD_YEAR_ENDPOINT: createInflationExpectationsEndpoint("third-year"),
            FIVE_TO_THREE_YEARS_ENDPOINT: createInflationExpectationsEndpoint("five-to-three-years"),
            TEN_TO_FIVE_YEARS_ENDPOINT: createInflationExpectationsEndpoint("ten-to-five-years"),
            BY_MONTH_ENDPOINT: createInflationExpectationsEndpoint("month")
        }
    }

    static get BANK(){
        const createBankDataEndpoint = (suffix) =>
            this.API_VERSION_END_POINT.addPath("bank").addPath(suffix);

        return {
            BEST_BANK: createBankDataEndpoint("best-bank"),
            ALL_BANKS: createBankDataEndpoint("all-banks"),
            BANK_DATA: createBankDataEndpoint("bank-data"),
            MORTGAGE: createBankDataEndpoint("mortgage")
        }
    }

}

export default Endpoints;