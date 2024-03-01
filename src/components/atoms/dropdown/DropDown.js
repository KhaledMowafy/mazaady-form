import { Label } from "../../typography/Typography";
import MoonLoader from "react-spinners/MoonLoader";
function DropDown({ data, title, category, loading, error }) {
  return (
    <div className="flex flex-col w-full">
      <Label label={`${category}`}>{title}</Label>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <MoonLoader color="black" />
        </div>
      ) : (
        <select id={`${category}`} className="rounded p-3 w-full">
          <option hidden>Select an option...</option>
          {data?.data.categories.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default DropDown;
