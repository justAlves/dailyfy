"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useFirebase } from '@/services/firebaseConnection'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/userContext'
import Sidebar from '@/components/ui/sidebar'
import EmptyNoteImage from '@/assets/images/emptyNotes.svg'
import Image from 'next/image'

export default function Dashboard() {
    const {auth} = useFirebase()

    const router = useRouter()

    const {state: {user}, actions: {setUser}} = useUser()

    const notes = null;

    onAuthStateChanged(auth, user => {
        if(!user){
            router.push('/login')
        }
    })

  return (
    <div className='h-screen w-4/5'>
        {notes ? (
          <span>Nota</span>
        ): (
          <div className='h-full w-full flex flex-col justify-center items-center gap-8'>
            <Image src={EmptyNoteImage} width={250} height={250} quality={100} alt='Imagem de uma caixa vazia'/>
            <span>Parece que ainda não há nada por aqui!</span>
            <Button className='w-1/3 font-bold bg-app hover:bg-app/85 text-secondary'>
              Comece a escrever
            </Button>
          </div>
        )}
    </div>
  )
}
