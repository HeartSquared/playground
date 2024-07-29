import './RadioGroup.css';

export type RadioGroupProps<OptionValues extends string> = {
  legend: string;
  name: string;
  activeOption: string;
  onOptionChange: (value: OptionValues) => void;
  options: { label: string; value: OptionValues }[];
};

export const RadioGroup = <OptionValues extends string>({
  legend,
  name,
  activeOption,
  onOptionChange,
  options,
}: RadioGroupProps<OptionValues>): JSX.Element => (
  <fieldset>
    <legend>{legend}</legend>
    {options.map(({ label, value }) => {
      const inputId = `${name}--${value}`;
      return (
        <div key={value} className="radio-group__option">
          <input
            type="radio"
            name={name}
            id={inputId}
            value={value}
            checked={value === activeOption}
            onChange={() => onOptionChange(value)}
          />
          <label htmlFor={inputId}>{label}</label>
        </div>
      );
    })}
  </fieldset>
);
