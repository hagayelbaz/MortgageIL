import Circle from "./Circle";
import Text from "./Text";

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Pie = ({percentage, color, text}) => {
    const pct = cleanPercentage(percentage);

    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour="rgba(200,200,200,.4)" pct={100} strokeWidth={'0.8em'}/>
                <Circle colour={color} pct={pct}/>
            </g>
            <Text text={text ?? `${pct.toFixed(0)}%`} pos={{x: '50%', y: '50%'}}/>
        </svg>
    );
};

export default Pie;