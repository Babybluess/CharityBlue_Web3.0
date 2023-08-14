import {Banner, Navbar, About, Categories, Campaign, News, Volunteer, Footer} from '@/components'

export default function Home() {
  return (
    <div className=' w-full h-[5100px] overflow-hidden bg-gradient-to-br from-[#65BB9B] to-[#EDD3A6]'>
      <div className=' h-[100px] rounded-t-lg justify-center items-end flex'>
        <Navbar/>
      </div>
      <div className=' h-[650px] justify-center flex'>
        <Banner/>
      </div>
      <div className=' h-[700px] justify-center flex'>
        <About/>
      </div>
      <div className=' h-[750px] flex justify-center'>
        <Categories/>
      </div>
      <div className=' h-[850px] flex justify-center'>
        <Campaign/>
      </div>
      <div className=' h-[800px] flex justify-center'>
        <News/>
      </div>
      <div className=' h-[700px] flex justify-center'>
        <Volunteer/>
      </div>
      <div className=' h-[500px] flex justify-center'>
        <Footer/>
      </div>
    </div>
  )
}
