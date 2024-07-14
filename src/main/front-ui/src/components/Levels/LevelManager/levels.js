export const levels = [
    //0 (loanPurpose, additionalProperty)
    {
        title: "מהי מטרת ההלוואה?",
        type: "object",
        required: ["loanPurpose"],
        properties: {
            loanPurpose: {
                type: "number",
                title: "מטרת ההלוואה",
                oneOf: [
                    {enum: [1], title: "שיפוץ"},
                    {enum: [2], title: "הרחבה"},
                    {enum: [3], title: "נכס"},
                    {enum: [4], title: "מחזור"},
                    {enum: [5], title: "מטרה אחרת"},
                ]
            },
            additionalProperty: {
                type: "boolean",
                title: "האם בבעלותך נכס נוסף? (או מעל 33% בנכס)"
            }
        },
        $calcNext: (formData) => {
            const loanPurpose = formData.loanPurpose;
            if (loanPurpose === 4 || loanPurpose === 5) {
                return 6;
            }
            if(formData.additionalProperty) {
                return 1;
            }
            if(loanPurpose === 3) {
                return 2;
            }
            return 4;
        }
    },
    //1 (additionalPropertiesCount)
    {
        title: "כמה נכסים יש בבעלותך?",
        type: "object",
        required: ["additionalPropertiesCount"],
        properties: {
            additionalPropertiesCount: {
                type: "number",
                title: "מספר נכסים",
                oneOf: [
                    {enum: [1], title: "אחד"},
                    {enum: [2], title: "יותר מאחד"}
                ]
            }
        },
        $calcNext: (formData) => {
            const additionalPropertiesCount = formData.additionalPropertiesCount;
            //can return additionalPropertiesCount +2 but it's not clear
            if(additionalPropertiesCount === 1) {
                return 3;
            } else
                return 4;
        }
    },
    //2 (isFirstAssets, isPriceForOccupant)
    {
        title: "פרטים נוספים",
        type: "object",
        properties: {
            isFirstAssets: {
                type: "boolean",
                title: "האם זהו נכס הראשון שלך?"
            },
            isPriceForOccupant: {
                type: "boolean",
                title: "האם מדובר במחיר למשתכן?"
            }
        },
        $calcNext: (formData) => {
            if(formData.isPriceForOccupant) {
                return 5;
            }
            return 4;
        }
    },
    //3 (isToSell)
    {
        title: "האם בכוונתך למכור את הדירה?",
        type: "object",
        required: ["isToSell"],
        properties: {
            isToSell: {
                type: "number",
                title: "האם בכוונתך למכור את הדירה?",
                oneOf: [
                    {enum: [1], title: "כן"},
                    {enum: [2], title: "לא"},
                    {enum: [3], title: "לא יודע/ת"}
                ]
            }
        },
        $calcNext: (formData) => {
            return 4;
        }
    },
    //4 (price)
    {
        title: "מהו מחיר הנכס / שיפוץ / הרחבה?",
        type: "object",
        required: ["price"],
        properties: {
            price: {
                type: "number",
                title: "מחיר הנכס",
                minimum: 0,
                maximum: 100000000
            }
        },
        $calcNext: (formData) => {
            return 6;
        }
    },
    //5 (price, marketPrice)
    {
        title: "מחיר בחוזה ושווי שוק",
        type: "object",
        required: ["price"],
        properties: {
            price: {
                type: "number",
                title: "מחיר הנכס בחוזה",
                minimum: 0,
                maximum: 100000000
            },
            marketPrice: {
                type: "number",
                title: "שווי שוק",
                minimum: 0,
                maximum: 100000000
            }
        },
        $calcNext: (formData) => {
            return 6;
        }
    },
    //6 (loanAmount)
    {
        title: "סכום ההלוואה",
        type: "object",
        required: ["loanAmount"],
        properties: {
            loanAmount: {
                type: "number",
                title: "סכום ההלוואה",
                minimum: 0,
                maximum: 100000000
            }
        },
        $calcNext: (formData) => {
            return 7;
        }
    },
    //7 borrowers details (firstName, lastName, employer, salary)
    {
        title: "פרטי הלווים",
        type: "object",
        properties: {
            borrowers: {
                title: "לווים",
                type: "array",
                items: {
                    type: "object",
                    required: ["firstName", "lastName", "employer", "salary"],
                    properties: {
                        firstName: {
                            type: "string",
                            title: "שם פרטי"
                        },
                        lastName: {
                            type: "string",
                            title: "שם משפחה"
                        },
                        employer: {
                            type: "string",
                            title: "מעסיק"
                        },
                        salary: {
                            type: "number",
                            title: "שכר",
                            minimum: 0,
                            maximum: 100000000
                        }
                    }
                }
            }
        },
        $calcNext: (formData) => {
            return 8;
        }
    },
    //8 borrower liabilities (description, amount, endDate)
    {
        title: "התחייבויות / הלוואות",
        type: "object",
        properties: {
            borrowerLiabilities: {
                title: "התחייבויות / הלוואות",
                type: "array",
                items: {
                    type: "object",
                    /*required: ["description", "amount"],*/
                    properties: {
                        description: {
                            type: "string",
                            title: "תיאור"
                        },
                        amount: {
                            type: "number",
                            title: "סכום",
                            minimum: 0,
                            maximum: 100000000
                        },
                        endDate: {
                            type: "string",
                            title: "תאריך סיום",
                            format: "date"
                        }
                    }
                }
            }
        }
    }
];


