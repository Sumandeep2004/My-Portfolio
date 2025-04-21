import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d2pl7cg',
      'template_87ij5ur',
      form.current,
      'Yojkw5uEPlJB88VrQ'
    ).then(() => {
      toast.success("Message sent successfully! 😊", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      form.current.reset();
    }, (error) => {
      console.error(error);
      toast.error("Oops! Message failed to send. 😢", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="p-6 md:p-12 bg-[#FDF2EA] rounded-xl max-w-xl mx-auto shadow-2xl border border-[#9F3D3D] mt-44" id='contact'>
      <h2 className="text-4xl font-bold text-center text-[#9F3D3D] poppins-bold-italic mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input name="from_name" type="text" placeholder="Your Name" required className="border border-gray-300 p-3 rounded-md focus:outline-[#9F3D3D]" />
        <input name="reply_to" type="email" placeholder="Your Email" required className="border border-gray-300 p-3 rounded-md focus:outline-[#9F3D3D]" />
        <input name="subject" type="text" placeholder="Subject" className="border border-gray-300 p-3 rounded-md focus:outline-[#9F3D3D]" />
        <textarea name="message" placeholder="Your Message" rows="5" required className="border border-gray-300 p-3 rounded-md focus:outline-[#9F3D3D]"></textarea>
        <button type="submit" className="bg-[#9F3D3D] text-white py-2 rounded-md hover:bg-[#7d2f2f] transition">Send Message</button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
