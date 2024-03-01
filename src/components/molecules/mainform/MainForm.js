"use client"

import DropDown from "@/components/atoms/dropdown/DropDown";
import SubForm from "../subform/SubForm";
import useApiServices from "@/components/utils/useApiServices";
import {useEffect, useState} from 'react';


function MainForm() {
    const [category, setCategory] = useState('');
    const [children, setChildren] = useState([]);
    const {data, loading, error} = useApiServices({path:'/get_all_cats', CRUD:'get'})

    useEffect(()=>{
            const pickedCategory = data?.data.categories.filter(item => item.id === parseInt(category))[0];
            setChildren(pickedCategory?.children)
    },[category, data])

  return (
   <div className="w-full">
      <DropDown data={data} title={'Main Category'} category={'MainForm'} loading={loading} error={error} setCategory={setCategory}/>
      <SubForm childs={children} />
    </div>
  )
}

export default MainForm
