import React from 'react'
import { Label } from '@/components/typography/Typography';

function SubCategory({title, category, childs, setSub}) {
  return (
    <div className="flex flex-col w-full mt-10">
      <Label label={`${category}`}>{title}</Label>
     
        <select id={`${category}`} data-testid={`${category}-dropdown`} className="rounded p-3 w-full" onChange={e=>setSub(e.target.value)}>
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
