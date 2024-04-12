import createNumberMask from 'text-mask-addons/dist/createNumberMask'


class Mask {

    static mask = [
        {
            name: "ALL",
            maskStr: {

            },
            mask: () => Array(100).fill(/./)
        },
        {
            name: "NIS",
            maskStr: {
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
            },
            mask: (maskOptions) => createNumberMask({ ...maskOptions, ...Mask.mask[1].maskStr })
        },
        {
            name: "percentage",
            maskStr: {
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
            },
            mask: (maskOptions) => createNumberMask({ ...maskOptions, ...Mask.mask[2].maskStr })
        }
    ]
}

export default Mask;