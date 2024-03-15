"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useUser } from '@/contexts/userContext'
import {LogOut, MoonIcon} from 'lucide-react'
import { signOut } from 'firebase/auth'
import { useFirebase } from '@/services/firebaseConnection'
import { Separator } from './ui/separator'
import Cookies from 'js-cookie'
import { ModeToggle } from './dark-toggle'

export default function SidebarHeader() {
    const {state: {user}, actions: {setUser}} = useUser()
    const {auth} = useFirebase();

    async function logout(){
        signOut(auth)
        setUser(null);
        Cookies.remove("user")
    }

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold text-primary'>Daily<span className='text-app'>Fy</span></h1>
        <ModeToggle/>
      </div>
        <Button variant={'ghost'} className='flex items-center gap-4'>
            <Image src={user?.photoURL as string} width={35} height={35} alt='' className='rounded-full'/>
            <span className='text-md font-normal text-primary'>{user?.displayName}</span>
            <LogOut size={25} className='text-red-500 hover:text-red-500/50 hover:cursor-pointer' onClick={logout}/>
        </Button>
        <Separator className='my-4 dark:bg-white/10'/>
    </div>
  )
}
