'use client'

import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='w-1/5 h-screen'>
            <span className='flex h-full justify-center items-center'>
            <Image
                className='img-profile rounded-full'
                width={250}
                height={250}
                src="/work-pp.jpeg"
                alt="work-pp"
            />
            </span>
        </div>
    )
}

export default Sidebar