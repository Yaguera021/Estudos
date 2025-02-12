interface RadioGroupProps {
  label: string;
  name: string;
  options: (string | number)[];
  selectedValue: string | number;
  onChange: (value: string | number) => void;
}

export default RadioGroupProps;
