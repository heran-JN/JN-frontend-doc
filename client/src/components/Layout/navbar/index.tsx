import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from '@/components/Layout/mode-toggle'


type Props = {}

const Navbar =  (props: Props) => {
  return (
    <header className="fixed right-0 top-0 my-2 mx-4 bg-black/40 backdrop-blur-lg z-[100]  border-b-[1px] border-neutral-900 ">
      {/* <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Logo</p>
        <Image
          src="/lightning.png"
          width={15}
          height={15}
          alt="logo"
          className="shadow-sm"
        />
      </aside> */}
      <aside className="flex items-center gap-4">
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle/>
      </div>
      </aside>
    </header>
  )
}

export default Navbar
