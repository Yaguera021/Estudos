import RadioGroupProps from '../interfaces/RadioGroupProps';

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className={`${name}-container`}>
      <label>{label}</label>
      <div>
        {options.map((option) => (
          <label key={option}>
            <input
              type='radio'
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
