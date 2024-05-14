import './LevelButton.css';

const LevelButton = ({ options, value, onChange }) => {
    return (
        <div className="row g-2">
            {options.enumOptions.map(option => (
                <div className="col" key={option.value}>
                    <button
                        type="button"
                        className={`secondary-bg-light text-light custom-radio-button py-4 rounded-3   
                                    ${value === option.value ? 'active' : ''}`}
                        style={{ width: '100%' }}
                        onClick={() => onChange(option.value)}>
                        {option.label}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default LevelButton;