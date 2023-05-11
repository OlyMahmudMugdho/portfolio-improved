import myself from '../images/myself.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    return (
        <div id='about' className='flex flex-col justify-center items-center min-w-full md:pt-10 bg-slate-50'>
            <div>
                <h1 className='text-3xl  text-teal-700 font-bold md:text-5xl my-8 '>
                    <FontAwesomeIcon
                        icon={faUser}
                    />
                    <span className='ml-3'>About Me</span>
                </h1>
            </div>
            <div className='md:flex md:py-8 md:my-4 md:justify-cnter'>
                <div className='flex flex-col justify-center items-center md:w-3/6'>
                    <img src={myself} alt="myself" className='w-8/12  md:w-80 border rounded-lg shadow-sm shadow-gray-200' />
                </div>
                <div className='mx-4 my-4 leading-7 text-justify md:w-3/6'>

                    <h1 className='text-2xl md:text-2xl text-teal-700 font-medium mb-6 mt-10'>
                        I'm M. Oly Mahmud
                    </h1>

                    <p className='md:w-10/12'>
                        I am a Full Stack Web Developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge in Software Engineering. I make web applications using MERN stack. I also make softwares using Python.

                    </p>
                    <h1>
                        <span className='text-slate-700 font-semibold'>Email: </span>
                        <span>
                            oly.ice.pust@gmail.com
                        </span>
                    </h1>
                    <h1>
                        <span className='text-slate-700 font-semibold'>Place: </span>
                        <span>
                            Pabna-6600, Bangladesh
                        </span>
                    </h1>
                    <h1>
                        <span className='text-slate-700 font-semibold'>Study: </span>
                        <span>
                            B.Sc.(Engineering.) in Information & Communication Engineering (ICE), <br />
                            Pabna University of Science and Technology
                        </span>
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default About