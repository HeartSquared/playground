import './RadioGroup.css';

export type RadioGroupProps = {
  legend: string;
  name: string;
  options: { label: string; value: string }[];
};

export const RadioGroup = ({
  legend,
  name,
  options,
}: RadioGroupProps): JSX.Element => (
  <fieldset>
    <legend>{legend}</legend>
    {options.map(({ label, value }) => {
      const inputId = `${name}--${value}`;
      return (
        <div key={value} className="radio-group__options">
          <input type="radio" name={name} id={inputId} value={value} />
          <label htmlFor={inputId}>{label}</label>
        </div>
      );
    })}
  </fieldset>
);
