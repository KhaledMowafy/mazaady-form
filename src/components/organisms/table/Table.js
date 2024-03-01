import React from 'react'

function Table({entireData}) {
  return (
    <div>
        <table className='table-auto w-full border-collapse border border-slate-400 mt-10'>
            <thead>
                <tr>
                    <th className='border border-slate-300 text-left'>Key</th>
                    <th className='border border-slate-300 text-left'>Value</th>
                </tr>
            </thead>
            <tbody>
            {Object.entries(entireData).map(([key, value])=> (
            <tr  key={key}>
                <td className='border border-slate-300'>{key}</td>
                <td className='border border-slate-300'>{value}</td>
          </tr>
        ))}
            </tbody>
        </table>
     
    </div>
  )
}

export default Table
