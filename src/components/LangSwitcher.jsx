import { useId } from "react";

export const LangSwircher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <h2>Choosen language: {value}</h2>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
      <hr />
    </div>
  );
};
