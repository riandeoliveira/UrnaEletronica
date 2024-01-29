import javascriptLogo from "assets/icons/javascript-logo.svg";
import nextjsLogo from "assets/icons/nextjs-logo.svg";
import reactLogo from "assets/icons/react-logo.svg";
import sassLogo from "assets/icons/sass-logo.svg";
import tailwindcssLogo from "assets/icons/tailwindcss-logo.svg";
import typescriptLogo from "assets/icons/typescript-logo.svg";
import type { ProjectType } from "types";
import { v4 as uuidv4 } from "uuid";

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    name: "Urna Eletrônica",
    description:
      "Simulador web totalmente funcional da Nova Urna Eletrônica que foi utilizada pela primeira vez nas Eleições Brasileiras de 2022.",
    image: "urna-eletronica.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, tailwindcssLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/UrnaEletronica",
    website_link: "https://urna-eletronica-three.vercel.app/",
    release_date: "Janeiro de 2023",
  },
  {
    id: uuidv4(),
    name: "Popular Movies",
    description:
      "Aplicação para pesquisar e favoritar filmes no Local Storage do navegador, fazendo uso da API do The Movie Database (TMDB).",
    image: "popular-movies.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, tailwindcssLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/PopularMovies",
    website_link: "https://popular-movies-six.vercel.app/",
    release_date: "Janeiro de 2023",
  },
  {
    id: uuidv4(),
    name: "Todo List",
    description:
      "Lista de Tarefas básica e funcional, com salvamento de dados no Local Storage do navegador.",
    image: "todo-list.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, sassLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/TodoList",
    website_link: "https://todo-list-ruddy-six.vercel.app/",
    release_date: "Agosto de 2022",
  },
  {
    id: uuidv4(),
    name: "MediCenter",
    description:
      "Página inicial de um website reponsivo e acessível para uma clínica médica fictícia.",
    image: "medicenter.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, sassLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/MediCenter",
    website_link: "https://medicenter-beryl.vercel.app/",
    release_date: "Dezembro de 2021",
  },
  {
    id: uuidv4(),
    name: "LinkedIn Clone",
    description: "Clone da página de perfil do LinkedIn.",
    image: "linkedin-clone.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, sassLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/LinkedInClone",
    website_link: "https://linkedin-clone-zeta-three.vercel.app/",
    release_date: "Agosto de 2022",
  },
  {
    id: uuidv4(),
    name: "OptimusTech",
    description: "Página completa de vagas da empresa fictícia OptimusTech.",
    image: "optimustech.png",
    skill_icons: [javascriptLogo, nextjsLogo, reactLogo, sassLogo, typescriptLogo],
    github_link: "https://github.com/riandeoliveira/OptimusTech",
    website_link: "https://optimus-tech-eta.vercel.app/",
    release_date: "Julho de 2022",
  },
];
