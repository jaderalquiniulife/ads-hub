export type CategoriaProjeto =
  | "web"
  | "mobile"
  | "api";

export type FiltroProjeto =
  | "todos"
  | CategoriaProjeto;

export interface Projeto {
  id: number;
  titulo: string;
  categoria: CategoriaProjeto;
  descricao: string;
}

export interface FormularioContato {
  nome: string;
  email: string;
  mensagem: string;
}

export type ErrosFormulario = Partial<
  Record<keyof FormularioContato, string>
>;
