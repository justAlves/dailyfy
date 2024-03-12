'use client'

import Image from 'next/image'
import React from 'react'
import OnBoardingImage from '@/assets/images/onboarding.svg'
import GoogleImage from '@/assets/images/google.svg'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useFirebase } from '@/services/firebaseConnection'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { redirect, useRouter } from 'next/navigation'
import { UserProps, useUser } from '@/contexts/userContext'
import Cookies from 'js-cookie'

const schema = z.object({
    email: z.string().email("Digite um email valido"),
    password: z.string().min(6, "Sua senha precisa conter ao menos 6 caracteres"),
    confirmPassword: z.string(),
}).refine(({ password, confirmPassword}) => password === confirmPassword, {
    message: "Password doesn't match",
    path: ["confirm_password"]
  })

type FormSchema = z.infer<typeof schema>

export default function Register() {
    const {auth} = useFirebase();
    const router = useRouter()
    const {actions: {setUser}} = useUser()

    onAuthStateChanged(auth, user => {
        if(user){
            router.push('/dashboard')
        }
    })

    const {register, handleSubmit} = useForm<FormSchema>({
        resolver: zodResolver(schema)
    })


    async function handleRegister(data : FormSchema) {
        console.log(data)

        const response = await createUserWithEmailAndPassword(auth, data.email, data.password).then(data => {
            const user = data.user as UserProps

            Cookies.set("user", JSON.stringify(user), {expires: 30})
            setUser(user)
        })
    }

  return (
    <div className='h-screen flex'>
        <div className='w-1/2 h-full justify-center items-center hidden md:flex'>
            <Image src={OnBoardingImage} width={400} height={400} quality={100} alt='Homem colocando anotações na parede'/>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center flex-col p-8">
            <div className='mb-10'>
                <h1 className='text-2xl font-bold text-start'><span className='text-app'>DailyFy</span>,</h1>
                <h1 className='text-2xl font-bold'>Seu Espaço de Anotações Pessoais!</h1>
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <Input className='md:w-1/2 mb-4' placeholder='Insira seu email' type='email' {...register("email")}/>
                <Input className='md:w-1/2 mb-4' placeholder='Insira sua senha' type='password' {...register("password")}/>
                <Input className='md:w-1/2 mb-4' placeholder='Confirme sua senha' type='password' {...register("confirmPassword")}/>
                <Button className='md:w-1/2 bg-app hover:bg-app/85 font-semibold'  type='submit'>
                    Cadastrar
                </Button>
                <Separator className='my-4 w-1/2'/>
                <div className='flex flex-col'>
                    <Button asChild variant={'link'} className='w-1/2' type='button'>
                        <Link href={"/login"}>
                            Já possui uma conta? <span className='text-app ml-1'>Entre agora mesmo!</span>
                        </Link>
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}
