

const Project = (props) => {
    return (
        <div className="flex flex-col md:w-56 md:mx-10 mx-3 my-3 md:my-5">
            <div className="w-full">
                <img src={props.imgName} alt="name of the project" className="h-36 w-full" />
            </div>
            <div className="py-4 h-40">
                <h1 className="text-center text-xl font-bold text-emerald-800 my-2">
                    {props.title}
                </h1>
                <p className="text-lg md:text-base">
                    {props.body}
                </p>
            </div>
            <div className="w-full h-full flex flex-row text-center items-center">
                <a className="w-full h-full inline-block text-center sm:text-lg text-xl bg-teal-800 text-white py-2 border-r" href={props.liveUrl} target="_blank" rel="noopner noreferrer"> Live Demo</a>
                <a className="w-full h-full inline-block text-center  sm:text-lg text-xl bg-teal-800 text-white py-2" href={props.sourceCode} target="_blank" rel="noopner noreferrer">Source Code</a>
            </div>
        </div>
    )
}

export default Project
