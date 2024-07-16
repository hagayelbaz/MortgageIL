
export const toNis = (amount) => {
    if(!amount || isNaN(amount) || amount === Infinity || amount === -Infinity)
        return "₪0.00"
    return `₪${parseFloat(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export const toPercentage = (amount) => {
    if(isNaN(amount))
        return "0.00%"
    if(amount === Infinity || amount === -Infinity)
        return "∞";
    return `${parseFloat(amount).toFixed(2)}%`;
}


