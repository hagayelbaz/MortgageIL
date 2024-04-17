

export default function calculateDiff(item, data) {
    if(data.length === 0) return 0;

    const index = data.findIndex(d => d.date === item.date);
    const previousItem = data[index - 1] || data[0];
    return ((item.value - previousItem.value) / previousItem.value) * 100;
}