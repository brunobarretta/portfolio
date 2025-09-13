import { FaCode } from "react-icons/fa6"
import { projects } from "../data/data"
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-10 h-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("projects.title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-4 sm:w-1/2 w-full"
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg text-left hover:shadow-lg hover:shadow-green-500/20 transition">
                <h2 className="tracking-widest text-sm font-medium text-green-400 mb-2">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-xl font-semibold text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Ver no GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;