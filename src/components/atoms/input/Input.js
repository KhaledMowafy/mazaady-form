import React from 'react'
import { Label } from '@/components/typography/Typography'
function Input({title, category}) {
  return (
    <div className="mt-10">
        <Label label={`${category}`}>{title}</Label>
        <input id={`${category}`} type="text" className="rounded p-3 w-full "/>
    </div>
  )
}

export default Input
