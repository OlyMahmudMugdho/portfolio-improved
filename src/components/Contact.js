import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col  items-center w-full min-h-screen pt-20 md:px-20 bg-zinc-900">
            <div className="w-full text-center">
                <h1 className='text-3xl  text-teal-500 font-bold md:text-5xl md:mb-4 '>
                    <FontAwesomeIcon
                        icon={faMessage}
                    />
                    <span className='ml-3'>Contact Me</span>
                </h1>
            </div>
            <div className="w-full pt-10 flex md:flex-row flex-col md:flex-wrap justify-between items-between">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact