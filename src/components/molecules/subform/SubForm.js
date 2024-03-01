import {useState, useEffect} from 'react'
import SubCategory from '@/components/atoms/subcategory/SubCategory'
import useApiServices from '@/components/utils/useApiServices'
import Properties from '@/components/atoms/properties/Properties';

function SubForm({childs}) {
    const [sub, setSub] = useState('');

    const {data, loading, error} = useApiServices({path:`/properties?cat=${sub}`, CRUD:'get'})

  return (
    <div>
       <SubCategory title="Sub Category" category="subCategory" childs={childs} setSub={setSub}/>
       {data?.data&&data?.data.map((item)=>(
        <Properties title={item.name} category={`properties-${item.id}`} options={item.options} key={item.id}/>
       ))}
    </div>
  )
}

export default SubForm
