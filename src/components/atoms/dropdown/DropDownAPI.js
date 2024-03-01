"use client"
import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import API from '../../utils/API';
import useApiServices from '@/components/utils/useApiServices';

function DropDownAPI({title, category}) {

    const {data, loading, error} = useApiServices({path:'/get_all_cats', CRUD:'get'})
    
  return (
    <div className="w-full">
      <DropDown data={data} title={title} category={category} loading={loading} error={error}/>
    </div>
  )
}

export default DropDownAPI
