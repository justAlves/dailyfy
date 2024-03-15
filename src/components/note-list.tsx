"use client"

import React from 'react'
import { Button } from './ui/button';
import { redirect } from "next/navigation"
import { ScrollArea } from './ui/scroll-area';

export interface NoteProps {
  noteId: string;
  title: string;
  icon: string;
  authorId: string;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoteListProps {
  data?: NoteProps[]
}

export default function NoteList({data}: NoteListProps) {
  function handleClickOnPost(postId: string){
    redirect(`/post/${postId}`)
  }

  return (
    <div className='flex flex-col items-center h-96'>
      <span className='mb-8 text-sm font-normal text-black/55 dark:text-white/55'>Notas</span>
      {!data ? (
        <div className='flex flex-col items-center'>
          <span className='text-sm text-center my-4'>Parece que ainda não há nada por aqui!</span>
          <Button className='w-2/3 font-bold bg-app hover:bg-app/85 text-secondary'>
            Comece a escrever
          </Button>
        </div>
      ): (
        <ScrollArea className="h-full whitespace-nowrap">
          {data.map(item => (
            <div className='flex flex-col gap-4' key={item.noteId}>
              <Button
                onClick={() => handleClickOnPost(item.noteId)}
                variant={'default'} 
                className='mb-4 justify-start gap-2 bg-transparent hover:bg-black/15 border-[1px] border-black dark:border-white dark:hover:bg-white/15'
              >
                <span>{item.icon}</span>
                <span className='text-primary'>{item.title}</span>
              </Button>
            </div>
          ))}
        </ScrollArea>
      )}
    </div>
  )
}
