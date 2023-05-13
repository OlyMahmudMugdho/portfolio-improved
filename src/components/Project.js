

const Project = (props) => {
    return (
        <div className="flex flex-col md:w-3/12 md:mx-10 mx-3 my-3 md:my-5">
            <div className="w-full">
                <img src={props.imgName} alt="name of the project" className="h-36 w-full" />
            </div>
            <div className="h-36">
                <h1 className="text-center text-2xl font-bold text-emerald-800 my-2">
                    {props.title}
                </h1>
                <p>
                    {props.body}
                </p>
            </div>
            <div className="w-full">
                <a className="w-1/2 inline-block text-center py-2 text-xl bg-teal-800 text-white border-r border-solid" href={props.liveUrl} target="_blank" rel="noopner noreferrer"> Live Demo</a>
                <a className="w-1/2 inline-block text-center py-2 text-xl bg-teal-800 text-white" href={props.sourceCode} target="_blank" rel="noopner noreferrer">Source Code</a>
            </div>
        </div>
    )
}

export default Project


/*   {<div div className = "flex flex-col justify-center items-center md:w-3/12 px-4 mb-5" >
          <div className="w-full" >
              <img src={props.imgName} alt="name of the project" className="w-full h-32"/>
          </div>
          <div>
              <h3 className="text-center text-2xl font-bold text-emerald-800 my-2">
                  {props.title}
              </h3>
              <p className="text-justify mx-4 py-3">
                  {props.body}
              </p>
              <div className="w-full">
                  <a className="w-1/2 inline-block text-center py-2 text-xl bg-teal-800 text-white" href={props.liveUrl} target="_blank" rel="noopner noreferrer"> Live Demo</a>
                  <a className="w-1/2 inline-block text-center py-2 text-xl bg-teal-800 text-white" href={props.sourceCode} target="_blank" rel="noopner noreferrer">Source Code</a>
              </div>
          </div>
      </div >} */