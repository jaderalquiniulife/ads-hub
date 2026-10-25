import type { FiltroProjeto } from "@/types/project";

interface ProjectFilterProps {
  filtroAtual: FiltroProjeto;
  onAlterarFiltro:
    (filtro: FiltroProjeto) => void;
}

const filtros: FiltroProjeto[] = [
  "todos",
  "web",
  "mobile",
  "api",
];

export function ProjectFilter({
  filtroAtual,
  onAlterarFiltro,
}: ProjectFilterProps) {
  return (
    <div className="filtros">
      {filtros.map((filtro) => (
        <button
          key={filtro}
          type="button"
          className={
            filtroAtual === filtro
              ? "filtro ativo"
              : "filtro"
          }
          onClick={() =>
            onAlterarFiltro(filtro)
          }
        >
          {filtro}
        </button>
      ))}
    </div>
  );
}
