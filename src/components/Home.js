/* eslint-disable jsx-a11y/anchor-is-valid */

import developer from './developer.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';

const Home = () => {

  return (
    <div>
      <div className='flex flex-col-reverse w-full content-center justify-center items-center md:flex md:flex-row md:w-full md:justify-center md:my-0 lg:min-h-screenn md:pt-32 pb-20 md:pb-40 pt-10'>
        <div className='md:w-4/6 lg:w-1/2 lg:mr-10 w-11/12 flex flex-col justify-center items-center text-left text-2xl leading-10 text-teal-700 font-bold md:text-5xl md:ml-8'>
          <div className='w-full flex flex-col flex-col-wrap items-start justify-start'>
            <h1 className='inline-block mb-2'>Hi There,</h1>
            <h1 className='inline-block mb-2 md:mt-3'>I'm M. Oly <span className='text-amber-400'>Mahmud</span></h1>
            <h3 className=' mb-2 flex blinking-cursor md:mt-3'><span className='text-xl md:text-2xl text-zinc-700 mr-1 md:mr-2'>I'm a </span>
              <div className='text-xl md:text-2xl text-emerald-500 pr-0'>
                <Typewriter
                  options={{
                    strings: [' Full Stack Web Developer', ' Front End Web Developer', ' Back End Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h3>

            <a href="https://drive.google.com/file/d/1eGpNNmwOgcZ36HREFK8Aw-T7g0qb_IaQ/view?usp=sharing" className=' md:mt-3 bg-red-500 text-lg md:text-xl py-2 px-2 border rounded-lg text-white ' target='_blank' rel='noopener noreferrer'>Download Resume</a>
            <ul className='social-btn text-xl font-bold my-4 flex'>
              <li className='flex flex-row justify-center items-center md:my-4'><a href="https://www.linkedin.com/in/m-oly-mahmud-mugdho/" target="_blank" rel="noopner noreferrer" className='py-2 px-3 bg-slate-900 text-cyan-400 hover:text-white hover:bg-black mr-2 border rounded-xl'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li className='flex flex-row justify-center items-center md:my-4'><a href="https://twitter.com/m_oly_mahmud" target="_blank" rel="noopner noreferrer" className='py-2 px-3 bg-slate-900 text-cyan-400 hover:text-white hover:bg-black mr-2 border rounded-xl'><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className='flex flex-row justify-center items-center md:my-4'><a href="https://github.com/OlyMahmudMugdho" target="_blank" rel="noopner noreferrer" className='py-2 px-3 bg-slate-900 text-cyan-400 hover:text-white hover:bg-black mr-2 border rounded-xl'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li className='flex flex-row justify-center items-center md:my-4'><a href="https://www.instagram.com/mugdho_38/" target="_blank" rel="noopner noreferrer" className='py-2 px-3 bg-slate-900 text-cyan-400 hover:text-white hover:bg-black mr-2 border rounded-xl'><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li className='flex flex-row justify-center items-center md:my-4'><a href="https://www.facebook.com/Oly.Mahmud38/" target="_blank" rel="noopner noreferrer" className='py-2 px-3 bg-slate-900 text-cyan-400 hover:text-white hover:bg-black mr-2 border rounded-xl'><FontAwesomeIcon icon={faFacebook} /></a></li>
            </ul>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center md:flex md:justify-center md:mr-8'>
          <img className='w-60 md:h-full md:w-11/12 lg:w-80' src={developer} alt="developer" />
        </div>
      </div>
    </div>
  )
}

export default Home
