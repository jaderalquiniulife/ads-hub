"use client";

import {
  useState,
  type FormEvent,
} from "react";

import type {
  ErrosFormulario,
  FormularioContato,
} from "@/types/project";

const formularioInicial: FormularioContato = {
  nome: "",
  email: "",
  mensagem: "",
};

export function ContactForm() {
  const [formulario, setFormulario] =
    useState(formularioInicial);

  const [erros, setErros] =
    useState<ErrosFormulario>({});

  const [status, setStatus] =
    useState("");

  function atualizarCampo(
    campo: keyof FormularioContato,
    valor: string,
  ) {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  function enviarFormulario(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const novosErros: ErrosFormulario = {};

    if (!formulario.nome.trim()) {
      novosErros.nome =
        "Informe seu nome.";
    }

    if (
      !formulario.email.includes("@") ||
      !formulario.email.includes(".")
    ) {
      novosErros.email =
        "Informe um e-mail válido.";
    }

    if (
      formulario.mensagem.trim().length < 10
    ) {
      novosErros.mensagem =
        "Use pelo menos 10 caracteres.";
    }

    setErros(novosErros);

    if (
      Object.keys(novosErros).length > 0
    ) {
      setStatus(
        "Revise os campos destacados.",
      );
      return;
    }

    setStatus(
      "Dados validados com sucesso.",
    );

    setFormulario(formularioInicial);
  }

  return (
    <section
      id="contato"
      className="secao"
    >
      <div className="container">
        <h2>Contato</h2>

        <form
          className="formulario"
          onSubmit={enviarFormulario}
          noValidate
        >
          <label htmlFor="nome">
            Nome
          </label>

          <input
            id="nome"
            value={formulario.nome}
            onChange={(event) =>
              atualizarCampo(
                "nome",
                event.target.value,
              )
            }
          />

          <small className="erro">
            {erros.nome}
          </small>

          <label htmlFor="email">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            value={formulario.email}
            onChange={(event) =>
              atualizarCampo(
                "email",
                event.target.value,
              )
            }
          />

          <small className="erro">
            {erros.email}
          </small>

          <label htmlFor="mensagem">
            Mensagem
          </label>

          <textarea
            id="mensagem"
            rows={5}
            value={formulario.mensagem}
            onChange={(event) =>
              atualizarCampo(
                "mensagem",
                event.target.value,
              )
            }
          />

          <small className="erro">
            {erros.mensagem}
          </small>

          <button
            className="botao"
            type="submit"
          >
            Validar
          </button>

          <p
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
