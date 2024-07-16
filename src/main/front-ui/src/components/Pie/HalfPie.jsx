import Circle from "./Circle";
import Text from "./Text";
import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import {Vars} from "../../Vars";

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const HalfPie = ({percentage, color, text, height = 120}) => {
    const pct = cleanPercentage(percentage);
    const data = [
        {
            name: 'Users by device',
            value: percentage,
            fill: '#359669'
        }
    ];


    return (
        <ResponsiveContainer className="p-0 m-0" width="100%" height={height}>
            <RadialBarChart
                cx="50%"
                cy="100%"
                innerRadius="200%"
                outerRadius="200%"
                barSize={16}
                data={data}
                startAngle={180}
                endAngle={0}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    minAngle={15}
                    clockWise
                    dataKey="value"
                    cornerRadius={10}
                    background={{fill: Vars.SECONDARY_COLOR_LIGHT}}
                />
                <text
                    x="50%"
                    y="70%"
                    textAnchor="middle"
                    stroke="#fff"
                    strokeWidth={2}
                    fontSize='1.5rem'
                    dominantBaseline="middle"
                >
                    {percentage + "%"}
                </text>
                <text
                    x="50%"
                    y="95%"
                    textAnchor="middle"
                    stroke="#fff"
                    strokeWidth={.85}
                    dominantBaseline="middle"
                >
                    {text}
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export default HalfPie;