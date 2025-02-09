'use client'

import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    return (
        <header className='flex flex-col w-full text-primary  justify-center text-xl items-center gap-8'>
            <span className='cursor-pointer' onClick={() => router.push('/')} >Home</span>
            <span className='cursor-pointer' onClick={() => router.push('/about')} >About</span>
            <span className='cursor-pointer' onClick={() => router.push('/projects')} >Projects</span>
            <span className='cursor-pointer' onClick={() => router.push('/experience')} >Experience</span>
            <span className='cursor-pointer' onClick={() => router.push('/contact')} >Contact Me</span>
        </header>
    )
}

export default Header