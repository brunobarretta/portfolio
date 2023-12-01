import portfolioGif from '../assets/images/portfolio.gif'
import secretwordGif from '../assets/images/secretword.gif'
import reactgramGif from '../assets/images/reactgram.gif'

export const projects = [
    {
      title: "ReactGram",
      subtitle: "React, Redux, Express, MongoDB, Mongoose e mais",
      description:
        "Projeto ReactGram que é uma copia dos recursos base do Instagram, desenvolvido durante o curso de React na Udemy.",
      image: reactgramGif,
      link: "https://github.com/brunobarretta/ReactGram",
    },
    {
      title: "Portfólio",
      subtitle: "React, Context API, Vite, Tailwind e i18n",
      description:
        "Portfólio pessoal desenvolvido usando algumas tecnologias atuais aprendidas durante o desenvolvimento do projeto",
      image: portfolioGif,
      link: "https://github.com/brunobarretta/portfolio",
    },
    {
      title: "Secret Word",
      subtitle: "React, CSS e HTML",
      description:
        "Um projeto simples utilizando algumas ténicas aprendidas durante o curso de React da Udemy",
      image: secretwordGif,
      link: "https://github.com/brunobarretta/secret-word",
    }
  ];

  export const skills = [
    'React JS', 'Angular 2+', 'Ionic', 'Node', 'GraphQL', 'MySql', 'MongoDB', 'Firebase', 'HTML', 'CSS', 'Styled-Components', 'Tailwind', 'JavaScript', 'TypeScript', 'Git'
  ]

export default { projects, skills}