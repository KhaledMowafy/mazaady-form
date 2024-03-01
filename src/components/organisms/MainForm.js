"use client"

import {useState, useEffect} from 'react'
import CategoryForm from '../molecules/categoryform/CategoryForm';
import SubForm from '../molecules/subform/SubForm';
function MainPage() {

  const [category, setCategory] = useState('');
  const [children, setChildren] = useState([]);
  const [entireData, setEntireData] = useState();
    

  return (
    <div className="w-full">
        <CategoryForm setCategory={setCategory} category={category} setChildren={setChildren}/>
        <SubForm childs={children}/>
    </div>
  )
}

export default MainPage
