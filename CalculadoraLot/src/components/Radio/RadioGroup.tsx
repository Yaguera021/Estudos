import GroupProps from '../../interfaces/GroupProps';
import './RadioGroup.css';

const RadioGroup: React.FC<GroupProps> = ({
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
        {options.map((option: string | number) => (
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
