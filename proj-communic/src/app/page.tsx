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


export default function Home() {
  return (
    <main className="bg-black z-0 text-white">
      <button className="top-2 right-2 fixed z-50">
        <MenuIcon className="hamburger w-10 h-10 text-red-500 hover:text-red-700" />
      </button>
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
