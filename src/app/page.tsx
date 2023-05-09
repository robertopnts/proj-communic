"use client"
import {MenuIcon} from '@heroicons/react/solid';
import TitleBlock from "@/components/titleBlock";
import CapeFooter from "@/components/capeFooter";
import FirstPage from "@/components/firstPage";
import FirstChapter from "@/components/firstChapter";
import FirstChapterContent from "@/components/firstChapterContent";
import SecondChapter from "@/components/secondChapter";
import SecondChapterContent from "@/components/secondChapterContent";
import ThirdChapter from "@/components/thirdChapter";
import ThirdChapterContent from "@/components/thirdChapterContent";
import GraphBlock from "@/components/graphBlock";
import FourthChapter from '@/components/fourthChapter';
import FourthChapterContent from '@/components/fourthChapterContent';
import FourthChapterContent2 from '@/components/fourthChapterContent2';
import FifthChapter from '@/components/fifthChapter';
import FifthChapterContent from '@/components/fifthChapterContent';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isOpen , setIsOpen] = useState(false)

  return (
    <main className="bg-black z-0 text-white">
      <button onClick={() => setIsOpen(!isOpen)} className="top-2 right-2 fixed z-50">
        <MenuIcon className="hamburger w-10 h-10 text-red-500 hover:text-red-700" />
      </button>
      <div
        className={`fixed right-0 top-0 h-full z-40 bg-black p-4 rounded-md shadow-lg transition-all duration-500  ${
          isOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className='text-center mt-8 text-xl flex-col'>
          <li className="mb-8">
            <Link href="#first" className='text-red-700 text-bold opacity-100'>A luta desigual</Link>
          </li>
          <li className="mb-8">
            <Link href="#second" className='text-red-700 text-bold'>O lado que não vemos</Link>
          </li>
          <li className="mb-8">
            <Link href="#third" className='text-red-700 text-bold'>Despedidas</Link>
          </li>
          <li className="mb-8">
            <Link href="#fourth" className='text-red-700 text-bold'>Cuidados com a mente</Link>
          </li>
          <li className="mb-8">
            <Link href="#fifth" className='text-red-700 text-bold'>Devagar se aprende a viver novamente</Link>
          </li>
        </ul>
      </div>
      <TitleBlock/>
      <CapeFooter/>
      <FirstPage/>
      <FirstChapter/>
      <FirstChapterContent/>
      <SecondChapter/>
      <SecondChapterContent/>
      <ThirdChapter/>
      <ThirdChapterContent/>
      <GraphBlock/>
      <FourthChapter/>
      <FourthChapterContent/>
      <FourthChapterContent2/>
      <FifthChapter/>
      <FifthChapterContent/>
    </main>
  )
}
