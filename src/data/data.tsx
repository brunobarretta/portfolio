interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  site?: string;
}

export const projects:ProjectProps[] = [
    {
      title: "Busca Farmácia Popular",
      subtitle: "React, Context API, Vite, Styled Components, Mapbox, MongoDB e mais",
      description: "Farmácia Popular — Plataforma criada para facilitar o acesso às farmácias cadastradas no programa Farmácia Popular, oferecendo um mapa interativo e uma interface intuitiva que permite aos usuários localizar unidades próximas de forma simples, rápida e confiável.",
      link: "https://github.com/brunobarretta/farmacia-popular",
      site: "https://www.farmaciapopular.net.br"
    },
    {
      title: "Moon Cat Veterinária ",
      subtitle: "NextJs e Tailwind",
      description:
        "Landing page para um clinica veterinária localizada na cidade de Indaiatuba/SP.",
      link: "https://github.com/brunobarretta/mooncat",
      site: "https://www.mooncat.com.br"
    },
    {
      title: "ReactGram",
      subtitle: "React, Redux, Express, MongoDB, Mongoose e mais",
      description:
        "Projeto ReactGram que é uma copia dos recursos base do Instagram, desenvolvido durante o curso de React na Udemy.",
      link: "https://github.com/brunobarretta/ReactGram",
    },
    {
      title: "Portfólio",
      subtitle: "React, Context API, Vite, Tailwind e i18n",
      description:
        "Portfólio pessoal desenvolvido usando algumas tecnologias atuais aprendidas durante o desenvolvimento do projeto",
      link: "https://github.com/brunobarretta/portfolio",
    },
    {
      title: "Weather App",
      subtitle: "React, Fetch, CSS e HTML",
      description:
        "Um projeto simples utilizando uma API para pegar os dados do clima de uma determinada cidade",
      link: "https://github.com/brunobarretta/weather-app",
    }
  ];

  export const skills = [
    'React JS', 'Angular 2+', 'Ionic', 'Node', 'GraphQL', 'MySql', 'MongoDB', 'Firebase', 'HTML', 'CSS', 'Styled-Components', 'Tailwind', 'JavaScript', 'TypeScript', 'Git'
  ]

export default { projects, skills}