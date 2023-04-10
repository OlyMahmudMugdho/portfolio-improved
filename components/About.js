import myself from '../images/myself.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    
    return (
        <div id='about' className='flex flex-col justify-center items-center w-full'>
            <div>
                <h1 className='text-3xl  text-teal-700 font-bold md:text-5xl my-8 '>
                    <FontAwesomeIcon
                        icon={faUser}
                    />
                    <span className='ml-3'>About Me</span>
                </h1>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <img src={myself} alt="myself" className='w-8/12 md:w-80 border rounded-lg shadow-sm shadow-gray-200' />
                </div>
                <div className='mx-4 my-4 leading-7 text-justify'>

                    <h1 className='text-2xl md:text-2xl text-teal-700 font-medium mb-6 mt-10'>
                        I'm M. Oly Mahmud
                    </h1>

                    <p>
                        I am a Full Stack Web Developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge in Software Engineering. I make web applications using MERN stack. I also make softwares using Python.

                    </p>
                    <h1>
                        <span className='text-slate-700 font-semibold'>Email : </span> oly.ice.pust@gmail.com
                    </h1>
                    <h1>
                        <span className='text-slate-700 font-semibold'>Place : </span> Pabna-6600, Bangladesh
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default About