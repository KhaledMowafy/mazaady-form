"use client"

import DropDown from './DropDown';
import useApiServices from '@/components/utils/useApiServices';

function DropDownWrapper({title, category}) {

    const {data, loading, error} = useApiServices({path:'/get_all_cats', CRUD:'get'})
    
  return (
    <div className="w-full">
      <DropDown data={data} title={title} category={category} loading={loading} error={error}/>
    </div>
  )
}

export default DropDownWrapper
