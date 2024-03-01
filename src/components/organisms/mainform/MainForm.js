"use client"

import {useState, useEffect} from 'react'
import CategoryForm from '../../molecules/categoryform/CategoryForm';
import SubForm from '../../molecules/subform/SubForm';
import { useLocalStorage } from "@/components/utils/useLocalStorage";
import Button from '../../atoms/button/Button';
import Table from '../table/Table';

function MainForm() {

  const [category, setCategory] = useState('');
  const [children, setChildren] = useState([]);
  const [entireData, setEntireData] = useLocalStorage('mainForm', {});
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
        <CategoryForm setCategory={setCategory} category={category} setChildren={setChildren} setEntireData={setEntireData} entireData={entireData}/>
        <SubForm childs={children} setEntireData={setEntireData} entireData={entireData}/>
        {show?<Table entireData={entireData}/>:''}
        <Button onClick={()=>setShow(true)} text='Submit'/>
    </div>
  )
}

export default MainForm
