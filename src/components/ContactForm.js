import { useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database


const ContactForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

    const sendMessage = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('message_table')
            .insert([
                {
                    name: await nameRef.current.value,
                    email: await emailRef.current.value,
                    message: await messageRef.current.value
                },
            ])

        if (await data) {
            console.log(await data);
        }
        if (await error) {
            console.log(await error);
        }
        else {
            toast.success('Message Sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        console.log(await nameRef.current.value);
        console.log(await emailRef.current.value);
        console.log(await messageRef.current.value);
    }

    return (
        <div className=' md:mr-32 flex flex-col justify-center m-auto items-center pb-10'>
            <h2 className='text-3xl py-10 text-teal-500 font-bold'>Send me a message</h2>
            <ToastContainer />
            <form className='flex flex-col items-center' onSubmit={sendMessage}>
                <input type="text" name="name" id="name" placeholder='Enter your name' className='bg-zinc-600 text-white border border-zinc-600 rounded-md placeholder:text-white border-solid mb-6 px-2 h-14 text-xl md:w-96 w-80' ref={nameRef} required />
                <input type="email" name="email" id="email" placeholder='Enter your E-mail' className='bg-zinc-600 text-white border border-zinc-600 rounded-md placeholder:text-white border-solid mb-6 px-2 h-14 text-xl md:w-96 w-80' ref={emailRef} required />
                <textarea name="messageBox" id="messageBox" cols="20" rows="6" className='bg-zinc-600 text-white border border-zinc-600 rounded-md placeholder:text-white border-solid mb-6 px-2 text-xl py-2 md:w-96 w-80' placeholder='Type your message here' ref={messageRef} required ></textarea>
                <button className="bg-teal-700 border border-teal-700 rounded-md w-full py-2 text-xl font-bold text-white">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm