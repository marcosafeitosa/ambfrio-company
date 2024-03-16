import React, { useEffect, useState } from 'react'
import Lists from '../Listas/Lists'
import '../../index.css'

export default function Mobile() {
  return (
    <>
      <p className='text-gray-200'><small>Navegação</small></p>
      <nav className='text-gray-200 h-inherit overflow-y-scroll custom-scrollbar flex flex-col'>
        <Lists iconBoolean={true} classDiv='overflow-y-scroll custom-scrollbar' classUl='list-none flex flex-col m-0 gap-10' />
      </nav>
    </>

  )
} 