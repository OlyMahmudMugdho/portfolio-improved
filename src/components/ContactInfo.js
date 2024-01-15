import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const ContactInfo = () => {
    return (
        <div className="flex flex-col justify-center md:ml-32 md:pl-8 text-2xl m-auto">
            <div className="flex flex-col justify-center py-10">
                <p className="flex mb-8 items-center text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-teal-500" />
                    <a href="mailto:oly.ice.pust@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2">oly.ice.pust@gmail.com</a>
                </p>

                <p className="flex mb-8 text-white">
                    <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-teal-500" />
                    <span className="ml-4">Pabna,Bangladesh</span>
                </p>

                <p className="flex mb-8 text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-teal-500" />
                    <a href="tel:+8801767229835" target="_blank" rel="noopener noreferrer" className="ml-2">+8801767229835</a>
                </p>
            </div>
        </div>
    )
}

export default ContactInfo