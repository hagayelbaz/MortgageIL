
export const toNis = (amount) => {
    return `₪${parseFloat(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export const toPercentage = (amount) => {
    return `${parseFloat(amount).toFixed(2)}%`;
}


