import {useState, useEffect} from 'react'
import SubCategory from '@/components/atoms/subcategory/SubCategory'
import useApiServices from '@/components/utils/useApiServices'

function SubForm({childs}) {
    const [sub, setSub] = useState('');
    
    const {data, loading, error} = useApiServices({path:`/properties?cat=${sub}`, CRUD:'get'})

  return (
    <div>
       <SubCategory title="Sub Category" category="subCategory" childs={childs} setSub={setSub}/>
    </div>
  )
}

export default SubForm
