import type { Projeto } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projetos: Projeto[];
}

export function ProjectList({
  projetos,
}: ProjectListProps) {
  return (
    <div className="grade-projetos">
      {projetos.map((projeto) => (
        <ProjectCard
          key={projeto.id}
          projeto={projeto}
        />
      ))}
    </div>
  );
}
