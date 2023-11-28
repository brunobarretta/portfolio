import { FaArrowRight } from "react-icons/fa6"
import Select from "./Select"
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {t} = useTranslation();
  
  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Bruno Barretta
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experience" className="mr-5 hover:text-white">
            {t('navbar.experience')} 
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            {t('navbar.projects')}
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            {t('navbar.skills')}
          </a>
        </nav>
        <div className="inline-flex items-center mr-5 py-1 px-3 mt-4 md:mt-0">
          <Select />
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            {t('navbar.contact')}
          <FaArrowRight  className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  )
}

export default Navbar