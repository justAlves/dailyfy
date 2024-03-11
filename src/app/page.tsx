import Image from 'next/image'
import React from 'react'
import OnBoardingImage from '@/assets/images/onboarding.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <div className='sm:w-2/4 flex flex-col justify-center text-center items-center w-full p-2'>
        <Image src={OnBoardingImage} width={200} height={200} quality={100} alt='Homem colocando anotações na parede'/>
        <h1 className='text-3xl font-bold text-title mt-10 mb-2'>Explore o Potencial Diário: Bem-vindo ao <span className='text-app'>DailyFy</span>, Seu Espaço de Anotações Pessoais!</h1>
        <p className='text-lg text-subtitle font-normal mb-10'>Desbloqueie a Criatividade, Organize Pensamentos e Cultive Hábitos Produtivos com a Experiência do Dailyfy.</p>
        <Button asChild className='font-semibold hover:scale-105 transition-all'>
          <Link href="/login">
            Começar
          </Link>
        </Button>
      </div>
    </div>
  )
}
