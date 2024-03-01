"use client"

import {useState, useEffect} from 'react'
import CategoryForm from '../molecules/categoryform/CategoryForm';
import SubForm from '../molecules/subform/SubForm';
import useApiServices from '../utils/useApiServices';
function MainPage() {

  const [category, setCategory] = useState('');
  const [children, setChildren] = useState([]);
  const [properties, setProperties] = useState();

    
  const {data, loading, error} = useApiServices({path:`/get-options-child/${properties}`, CRUD:'getID', id:properties})

  return (
    <div className="w-full">
        <CategoryForm setCategory={setCategory} category={category} setChildren={setChildren}/>
        <SubForm childs={children}/>
    </div>
  )
}

export default MainPage
