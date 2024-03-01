import { useState, useRef } from "react";
import Properties from "@/components/atoms/properties/Properties";
import useApiServices from "@/components/utils/useApiServices";
import Input from "@/components/atoms/input/Input";
function PropertiesForm({ title, category, options }) {
  const [property, setProperty] = useState();

  const {data, loading, error} = useApiServices({path:`/get-options-child/${property}`, CRUD:'getID', id:property})


  return (
    <div>
      <Properties
        title={title}
        category={category}
        options={options}
        setProperty={setProperty}
      />
      {property==='other'?<Input title={`Other - ${title}`} category={`other-${category}`}/>:''}
      
      {property!=='other'&&data?.data.length>0&&data?.data[0].options!==undefined&&
        <PropertiesForm title={data.data[0].name} category={data.data[0].name} options={data.data[0].options}/>
      }
    </div>
  );
}

export default PropertiesForm;
