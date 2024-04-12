class Color{
    static darkenColor(hex, percent, transparency) {
        const amount = Math.floor((percent / 100) * 255);
        const color = parseInt(hex.slice(1), 16); // Remove '#' and convert to integer
        const r = (color >> 16) - amount;
        const g = ((color >> 8) & 0x00FF) - amount;
        const b = (color & 0x0000FF) - amount;

        return "#" + (0x1000000 + Math.max(0, Math.min(r, 255)) * 0x10000 + Math.max(0, Math.min(g, 255)) * 0x100 + Math.max(0, Math.min(b, 255))).toString(16).slice(1) + transparency ? transparency : '';
    }

    static lightenColor(hex, percent) {
        const amount = Math.floor((percent / 100) * 255);
        const color = parseInt(hex.slice(1), 16); // Remove '#' and convert to integer
        const r = (color >> 16) + amount;
        const g = ((color >> 8) & 0x00FF) + amount;
        const b = (color & 0x0000FF) + amount;

        return "#" + (0x1000000 + Math.max(0, Math.min(r, 255)) * 0x10000 + Math.max(0, Math.min(g, 255)) * 0x100 + Math.max(0, Math.min(b, 255))).toString(16).slice(1);
    }


}

export default Color;