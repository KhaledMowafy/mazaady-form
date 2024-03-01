import React from 'react'
import { Label } from '@/components/typography/Typography';

function SubCategory({title, category, childs, setSub, setEntireData, entireData}) {

  const handleSelectedSubCategory = (e)=>{
    setSub(e.target.value); 
    setEntireData({...entireData, [title]: e.target[e.target.selectedIndex].innerText})
  }

  return (
    <div className="flex flex-col w-full mt-10">
      <Label label={`${category}`}>{title}</Label>
     
        <select id={`${category}`} data-testid={`${category}-dropdown`} className="rounded p-3 w-full" onChange={handleSelectedSubCategory}>
          <option hidden>Select a main category...</option>
          {childs?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default SubCategory
