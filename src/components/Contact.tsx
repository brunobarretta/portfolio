import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("fYOZUQDnuifofYCUO")
  }, [])

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const serviceId = "service_sq9kzgl";
    const templateId = "template_3ni0km8"
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name,
        user_email: email,
        message: message
      }, );
      
      toast.success("E-mail enviado com sucesso!", {
        position: "top-center"
      });
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado. Tente novamente mais tarde.", {
        position: "top-center"
      });
    } finally {
      setName("")
      setEmail("")
      setMessage("")
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative">
        <div className="text-center mb-10 mt-10">
          <FaEnvelope  className="w-10 h-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-full md:w-full flex flex-col md:ml-auto w-full mt-8 pb-10 md:mt-0 items-center justify-center">
          <div className="lg:w-2/4 md:w-3/4 relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lg:w-2/4 md:w-3/4 relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="lg:w-2/4 md:w-3/4 relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
                {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {t('contact.submit')}
          </button>
        </form>
        <ToastContainer theme={'dark'} autoClose={2000} />
    </section>
  );
}

export default Contact