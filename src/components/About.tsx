import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { useTranslation } from "react-i18next";

const About = () => {
    const {t} = useTranslation();

    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {t('about.introduceMyself')}
              <br className="hidden lg:inline-block" />
              {t('about.role')}
            </h1>
            <p className="mb-8 leading-relaxed">
              {t('about.bio')}
            </p>
            <div className="flex justify-center mb-4">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                {t('about.btnContact')}
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {t('about.btnProject')}
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/brunobarretta"
                target="_blank"
                className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <FaGithub className="w-7 h-7 inline-block" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-barretta-32440669/"
                target="_blank"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <FaLinkedin className="w-7 h-7 inline-block" />
              </a>
            </div>
          </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>
          <img
            className="relative w-64 h-64 object-cover rounded-full shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 animate-float"
            alt="hero"
            src="./profile.jpeg"
          />
        </div>
      </div>
        </div>
      </section>
    )
}

export default About