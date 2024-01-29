import type { SectionType } from "types";
import { v4 as uuidv4 } from "uuid";

export const sections: SectionType[] = [
  { id: uuidv4(), name: "about_me", label: "Sobre mim" },
  { id: uuidv4(), name: "projects", label: "Projetos" },
  { id: uuidv4(), name: "skills", label: "Habilidades" },
];
