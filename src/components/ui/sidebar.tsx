import React from 'react'
import SidebarHeader from '../sidebar-header'
import NoteList from '../note-list'
import { noteSeed } from '@/lib/noteSeed'

export default function Sidebar() {
  return (
    <aside className='hidden md:flex w-1/5 bg-secondary max-h-full shadow-md flex-col'>
        <SidebarHeader/>
        <NoteList data={noteSeed}/>
    </aside>
  )
}
