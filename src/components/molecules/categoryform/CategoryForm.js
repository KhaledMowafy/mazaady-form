"use client"

import DropDown from "@/components/atoms/dropdown/DropDown";
import useApiServices from "@/components/utils/useApiServices";
import {useEffect} from 'react';

function CategoryForm({setCategory, category, setChildren, setEntireData, entireData}) {
   
    const {data, loading, error} = useApiServices({path:'/get_all_cats', CRUD:'get'})

    useEffect(()=>{
            const pickedCategory = data?.data.categories.filter(item => item.id === parseInt(category))[0];
            setChildren(pickedCategory?.children)
    },[category, data, setChildren])

  return (
   <div className="w-full">
      <DropDown data={data} title={'Main Category'} category={'MainForm'} loading={loading} error={error} setCategory={setCategory} setEntireData={setEntireData} entireData={entireData}/>
    </div>
  )
}

export default CategoryForm
