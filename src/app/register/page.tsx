import Image from 'next/image'
import React from 'react'
import OnBoardingImage from '@/assets/images/onboarding.svg'
import GoogleImage from '@/assets/images/google.svg'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Login() {
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
            <Input className='md:w-1/2 mb-4' placeholder='Insira seu email' type='email'/>
            <Input className='md:w-1/2 mb-4' placeholder='Insira sua senha' type='password'/>
            <Input className='md:w-1/2 mb-4' placeholder='Confirme sua senha' type='password'/>
            <Button className='md:w-1/2 bg-app hover:bg-app/85 font-semibold'>
                Cadastrar
            </Button>
            <Separator className='my-4 w-1/2'/>
            <Button className='md:w-1/2 mb-2 font-semibold gap-2'>
                <Image src={GoogleImage} width={18} height={18} quality={100} alt='google logo'/>
                Ou entre com o Google
            </Button>
            <Button asChild variant={'link'} className='w-1/2'>
                <Link href={"/login"}>
                    Já possui uma conta? <span className='text-app ml-1'>Entre agora mesmo!</span>
                </Link>
            </Button>
        </div>
    </div>
  )
}
