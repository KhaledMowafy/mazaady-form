import { Label } from "../typography/Typography"
function DropDown({title, category}) {
  return (
    <div className="flex flex-col w-5/6">
    <Label label={`${category}`}>{title}</Label>
    <select id={`${category}`} className="rounded p-3 w-full">
      <option value="" className="">Select an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
  )
}

export default DropDown
