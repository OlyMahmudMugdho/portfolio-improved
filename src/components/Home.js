import developer from './developer.svg';

const Home = () => {
  return (
    <div className='flex flex-col-reverse w-full content-center justify-center items-center md:flex md:flex-row md:w-full md:justify-center md:mx-10 md:my-12 md:min-h-full'>
      <div className='w-full flex flex-col justify-center items-center text-left text-4xl leading-10 text-blue-700 font-bold md:text-5xl md:ml-8'>
        <div className='flex flex-col flex-col-wrap items-start justify-start'>
          <h1 className='inline-block'>Hi There,</h1>
          <h1 className='iline-block'>I'm M. Oly <span className='text-orange-400'>Mahmud</span></h1>
          <h3 className='inline-block'><span className='text-2xl text-slate-700'>I'm a</span> <span className='text-2xl text-red-800'>Full Stack Web Developer</span></h3>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center md:flex md:justify-center md:mr-8'>
        <img className='w-60 md:w-7/12' src={developer} alt="developer" />
      </div>
    </div>
  )
}

export default Home