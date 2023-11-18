import { FaGithub, FaLinkedin } from "react-icons/fa6"

const About = () => {

    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Bruno Barretta.
              <br className="hidden lg:inline-block" />
              I love to build amazing apps.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
            <div className="flex justify-center mb-4">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="w-9/12 object-cover object-center [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]"
              alt="hero"
              src="./profile.jpeg"
            />
          </div>
        </div>
      </section>
    )
}

export default About