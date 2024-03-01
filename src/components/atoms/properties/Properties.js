import React from 'react'
import { Label } from '@/components/typography/Typography'

function Properties({title, category, options, setProperty='', setEntireData, entireData}) {

  const handleSelectedProperty = (e)=>{

    setProperty(e.target.value); 
    if(e.target[e.target.selectedIndex].innerText!=='Other'){
    setEntireData({...entireData, [title]: e.target[e.target.selectedIndex].innerText})
  }
  }

  return (
    <div className="flex flex-col w-full mt-10">
    <div className="w-full flex justify-start items-center">
      <Label label={`${category}`}>{title}</Label>
     </div>
     <select id={`${category}`} data-testid="Test Category-dropdown" className="rounded p-3 w-full" onChange={handleSelectedProperty}>
       <option hidden>Select an option...</option>
       {options?.map((item) => (
         <option value={item.id} key={item.id}>
           {item.name}
         </option>
       ))}
       <option value='other'>Other</option>
     </select>
 </div>
  )
}

export default Properties
