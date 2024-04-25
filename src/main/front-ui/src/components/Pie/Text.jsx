const Text = ({ text, pos }) => {
    return (
        <text
            x={pos ? pos.x : "50%"}
            y={pos ? pos.y : "50%"}
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            fill='white'
        >
            {text}
        </text>
    );
};

export default Text;