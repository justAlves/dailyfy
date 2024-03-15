"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useFirebase } from '@/services/firebaseConnection'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/userContext'
import Sidebar from '@/components/ui/sidebar'

export default function Dashboard() {
    const {auth} = useFirebase()

    const router = useRouter()

    const {state: {user}, actions: {setUser}} = useUser()

    onAuthStateChanged(auth, user => {
        if(!user){
            router.push('/login')
        }
    })

  return (
    <div className='h-screen'>
        
    </div>
  )
}
