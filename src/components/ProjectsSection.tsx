"use client";

import { useState } from "react";
import { projetos } from "@/data/projects";
import type {
  FiltroProjeto,
} from "@/types/project";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectList } from "./ProjectList";

export function ProjectsSection() {
  const [filtro, setFiltro] =
    useState<FiltroProjeto>("todos");

  const projetosVisiveis =
    filtro === "todos"
      ? projetos
      : projetos.filter(
          (projeto) =>
            projeto.categoria === filtro,
        );

  return (
    <section
      id="projetos"
      className="secao"
    >
      <div className="container">
        <h2>Projetos</h2>

        <ProjectFilter
          filtroAtual={filtro}
          onAlterarFiltro={setFiltro}
        />

        <ProjectList
          projetos={projetosVisiveis}
        />
      </div>
    </section>
  );
}
