import Card from '../components/Card'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'


const MainPage = () => {
  console.log("server side")

  return (
    <main className='w-screen overflow-x-hidden'>
      <div className='text-3xl md:text-5xl text-center'>Hello, my name is Cestmir Pavlasek 👋</div>
      <div className='flex items-center justify-center m-3 gap-4'>
        <a 
          href='/CV_CestmirPavlasek.pdf' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='px-4 py-2 bg-[#20FC8F] text-[#38423B] hover:text-[#20FC8F] hover:bg-[#3F5E5A] rounded'
        >
          View CV
        </a>
        <a 
          href='/CV_CestmirPavlasek.pdf' 
          download='Cestmir_Pavlasek_CV.pdf'
          className='px-4 py-2 bg-[#20FC8F] text-[#38423B] hover:text-[#20FC8F] hover:bg-[#3F5E5A] rounded'
        >
          Download CV
        </a>
      </div>
      <Hero/>
      <Experience/>
      <Contact/>
    </main>
  )
}

export default MainPage
