import {useState, useEffect} from 'react'
import SubCategory from '@/components/atoms/subcategory/SubCategory'
import useApiServices from '@/components/utils/useApiServices'
import Properties from '@/components/atoms/properties/Properties';
import PropertiesForm from '../propertiesform/PropertiesForm';
function SubForm({childs}) {
    const [sub, setSub] = useState('');
    const [property, setProperty] = useState('')
    const {data, loading, error} = useApiServices({path:`/properties?cat=${sub}`, CRUD:'getID', id:sub})

  return (
    <div>
       <SubCategory title="Sub Category" category="subCategory" childs={childs} setSub={setSub}/>
       {data?.data&&data?.data.map((item)=>(
        <PropertiesForm title={item.name} category={`properties-${item.id}`} options={item.options} key={item.id} setProperty={setProperty}/>
       ))}
    </div>
  )
}

export default SubForm
