
const SingleSkill = (props) => {
    return (
        <div className="single-skill flex flex-col justify-center items-center bg-stone-200 py-2 px-3 mx-4 w-36 md:w-44 sm:w-40 border-sm rounded-lg my-3 border border-solid ">
            <img src={props.imgName} alt="the name of skill" className="w-20 h-20 my-1 " />
            <p className="font-bold text-slate-600 text-xl mt-1 text-center skill-name">
                {props.skillName}
            </p>
        </div>
    )
}

export default SingleSkill