import { Label } from "../../typography/Typography";
import MoonLoader from "react-spinners/MoonLoader";
function DropDown({ data, title, category, loading, setEntireData, setCategory, entireData}) {

  const handleSelectedCategory = (e)=>{

    setCategory(e.target.value); 
    setEntireData({...entireData, 'category': e.target[e.target.selectedIndex].innerText})
  }

  return (
    <div className="flex flex-col w-full">
       <div className="w-full flex justify-start items-center">
         <Label label={`${category}`}>{title}</Label>
         {loading ? (<MoonLoader color="black" data-testid="loading-spinner"/>):''}
        </div>
        <select id={`${category}`} data-testid="Test Category-dropdown" className="rounded p-3 w-full" onChange={handleSelectedCategory}>
          <option hidden>Select an option...</option>
          {data?.data.categories.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
    </div>
  );
}

export default DropDown;
