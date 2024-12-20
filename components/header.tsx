'use client'

import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    return (
        <header className='flex h-32 w-full text-primary bg-white justify-center text-xl items-center gap-8'>
            <span className='cursor-pointer' onClick={() => router.push('/')} >Home</span>
            {/* <span className='cursor-pointer' onClick={() => router.push('/about')} >About</span> */}
            <span className='cursor-pointer' onClick={() => router.push('/projects')} >Projects</span>
        </header>
    )
}

export default Header