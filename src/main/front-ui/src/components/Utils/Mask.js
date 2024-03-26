class Mask {

    static mask = [
        {
            name: "NIS",
            mask: {
                prefix: "₪",
                suffix: "",
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: ",",
                allowDecimal: true,
                decimalSymbol: ".",
                decimalLimit: 2,
                integerLimit: 10,
                allowNegative: true,
                allowLeadingZeroes: false
            }
        },
        {
            name: "percentage",
            mask: {
                prefix: "",
                suffix: "%",
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: ",",
                allowDecimal: true,
                decimalSymbol: ".",
                decimalLimit: 2,
                integerLimit: 3,
                allowNegative: true,
                allowLeadingZeroes: false
            }
        }
    ]
}

export default Mask;