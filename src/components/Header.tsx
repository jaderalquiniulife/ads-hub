"use client";

import { useState } from "react";

export function Header() {
  const [menuAberto, setMenuAberto] =
    useState(false);

  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <a className="logo" href="#inicio">
          ADS Hub
        </a>

        <button
          className="menu-botao"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() =>
            setMenuAberto((aberto) => !aberto)
          }
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav aria-label="Navegação principal">
          <ul
            id="menu-principal"
            className={
              menuAberto
                ? "menu aberto"
                : "menu"
            }
          >
            <li><a href="#inicio">Início</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
