"use client"

import {useState, useEffect} from 'react'
import CategoryForm from '../molecules/categoryform/CategoryForm';
import SubForm from '../molecules/subform/SubForm';
import { useLocalStorage } from "@/components/utils/useLocalStorage";

function MainPage() {

  const [category, setCategory] = useState('');
  const [children, setChildren] = useState([]);
  const [entireData, setEntireData] = useLocalStorage('mainForm', {});
    

  return (
    <div className="w-full">
        <CategoryForm setCategory={setCategory} category={category} setChildren={setChildren} setEntireData={setEntireData} entireData={entireData}/>
        <SubForm childs={children} setEntireData={setEntireData} entireData={entireData}/>
    </div>
  )
}

export default MainPage
