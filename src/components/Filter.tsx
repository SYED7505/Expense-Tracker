interface Props {
  onSelectCategory: (category: string) => void;
}
import { categories } from "../App";
const Filter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3 sd-dropdown">
      <select
        name="category01"
        id="category01"
        className="form-select"
        onChange={(event) => {
          onSelectCategory(event.target.value);
        }}
      >
        <option value="">All categories...</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
