import type { Projeto } from "@/types/project";

interface ProjectCardProps {
  projeto: Projeto;
}

export function ProjectCard({
  projeto,
}: ProjectCardProps) {
  return (
    <article className="card">
      <span className="card-tag">
        {projeto.categoria}
      </span>

      <h3>{projeto.titulo}</h3>

      <p>{projeto.descricao}</p>
    </article>
  );
}
