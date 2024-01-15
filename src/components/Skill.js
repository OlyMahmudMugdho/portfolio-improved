import SingleSkill from "./Layout/SingleSkill";
import ReactIcon from '../images/skills/ReactIcon.svg';
import ExpressJSDark from '../images/skills/ExpressJSDark.svg'
import nodejsLogo2 from '../images/skills/nodejsLogo2.svg';
import MongoLogo from '../images/skills/MongoLogo.svg';
import tailwindLogo from '../images/skills/tailwindLogo.svg';
import cLogo from '../images/skills/cLogo.svg';
import cppLogo from '../images/skills/cppLogo.svg';
import javaLogo from '../images/skills/javaLogo.svg';
import pythonLogo from '../images/skills/pythonLogo.svg';
import jsLogo from '../images/skills/jsLogo.svg';
import htmlLogo from '../images/skills/htmlLogo.svg';
import cssLogo from '../images/skills/cssLogo.svg';
import gitLogo from '../images/skills/gitLogo.svg';
import githubLogo from '../images/skills/githubLogo.svg';
import supabaseLogo from '../images/skills/supabaseLogo.png';
import netlifyLogo from '../images/skills/netlifyLogo.svg';
import Linux from '../images/skills/Linux.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import postgresql from "./../images/skills/postgresql.svg"

const Skill = () => {   
    return (

        <div id="skill" className="flex flex-col justify-center items-center min-w-full md:pt-5 bg-slate-100  md:px-20 pb-10 md-pb-20">
            <div>
                <h1 className='text-3xl  text-teal-700 font-bold md:text-5xl my-8 '>
                    <FontAwesomeIcon
                        icon={faCode}
                    />
                    <span className='ml-3'>My Skills</span>
                </h1>
            </div>
            <div className="bg-slate-100 flex flex-row flex-wrap  justify-center">
                <SingleSkill imgName={ReactIcon} skillName={"React"} />
                <SingleSkill imgName={ExpressJSDark} skillName={"Express.js"} />
                <SingleSkill imgName={nodejsLogo2} skillName={"Node.js"} />
                <SingleSkill imgName={MongoLogo} skillName={"MongoDB"} />
                <SingleSkill imgName={tailwindLogo} skillName={"Tailwind CSS"} />
                <SingleSkill imgName={cLogo} skillName={"C"} />
                <SingleSkill imgName={cppLogo} skillName={"C++"} />
                <SingleSkill imgName={javaLogo} skillName={"Java"} />
                <SingleSkill imgName={pythonLogo} skillName={"Python"} />
                <SingleSkill imgName={jsLogo} skillName={"JavaScript"} />
                <SingleSkill imgName={htmlLogo} skillName={"HTML"} />
                <SingleSkill imgName={cssLogo} skillName={"CSS"} />
                <SingleSkill imgName={gitLogo} skillName={"Git"} />
                <SingleSkill imgName={githubLogo} skillName={"GitHub"} />
                <SingleSkill imgName={supabaseLogo} skillName={"SupaBase"} />
                <SingleSkill imgName={netlifyLogo} skillName={"Netlify"} />
                <SingleSkill imgName={Linux} skillName={"Linux"} />
                <SingleSkill imgName={postgresql} skillName={"PostgreSQL"} />
            </div>
        </div>
    )
}

export default Skill