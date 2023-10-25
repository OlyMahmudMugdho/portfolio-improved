import Project from "./Project";
import pixl from "../images/projects/pixl.png";
import icePust from '../images/projects/icePust.png';
import todo from '../images/projects/todo.png';
import weatherRender from '../images/projects/weatherRender.png';
import blog from '../images/projects/blog.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
    return (
        <div id="works" className="flex flex-col justify-center items-center w-full min-h-screen  bg-gray-50  md:px-20 pt-10 pb-10">
            <div className="w-full text-center">
                <h1 className='text-3xl  text-teal-700 font-bold md:text-5xl md:mb-4 '>
                    <FontAwesomeIcon
                        icon={faLaptopCode}
                    />
                    <span className='ml-3'>Featured Projects</span>
                </h1>
            </div>
            <div className="w-full pt-10 flex md:flex-row flex-col md:flex-wrap justify-center items-center">

                <Project
                    imgName={pixl}
                    title={"Pixl"}
                    body={"pixl is a photo sharing app made using MERN stack."}
                    extra1={"Backend : Node.js, Express, Mongo DB"}
                    extra2={"Frontend : React, Redux, Tailwind CSS"}
                    liveUrl={"https://pixl-react.netlify.app/"}
                    sourceCode={"https://github.com/OlyMahmudMugdho/pixl"}
                />

                <Project
                    imgName={blog}
                    title={"Blog"}
                    body={"simple blog using React.js + Tailwind CSS with Supabase Backend"}
                    liveUrl={"https://react-blog-olymahmud.netlify.app/"}
                    sourceCode={"https://github.com/OlyMahmudMugdho/blog"}
                />

                <Project
                    imgName={weatherRender}
                    title={"Weather Render"}
                    body={"Weather app using vanilla JavaScript with fetch API"}
                    liveUrl={"https://weather-render.netlify.app/"}
                    sourceCode={"https://github.com/OlyMahmudMugdho/weather-render"}
                />
                <Project
                    imgName={todo}
                    title={"To-Do"}
                    body={"Simple To-Do list app using JavaScript that uses Local Storage to save data"}
                    liveUrl={"https://todo-app-olymahmud.netlify.app/"}
                    sourceCode={"https://github.com/OlyMahmudMugdho/todo-app-vanilla-js"}
                />

                <Project
                    imgName={icePust}
                    title={"PUST ICE Website"}
                    body={"Website of Department of Information & Communication Engineering, Pabna University of Science & Technology"}
                    liveUrl={"https://ice-pust.netlify.app/"}
                    sourceCode={"https://github.com/OlyMahmudMugdho/ice-pust-website"}
                />







            </div>
        </div>
    )
}

export default Work