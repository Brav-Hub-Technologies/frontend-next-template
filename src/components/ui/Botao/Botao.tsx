/* src/components/Botao/Botao.tsx */
import React from 'react';
import estilos from './Botao.module.css';

interface PropriedadesDoBotao extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string;
  tamanho?: 'pequeno' | 'padrao' | 'grande';
  estaCarregando?: boolean;
}

export function Botao({
  texto,
  tamanho = 'padrao',
  estaCarregando = false,
  ...propriedadesNativas
}: PropriedadesDoBotao) {
  const obterClasseDeTamanho = () => {
    switch (tamanho) {
      case 'pequeno':
        return estilos.tamanhoPequeno;
      case 'grande':
        return estilos.tamanhoGrande;
      default:
        return '';
    }
  };

  const classesDoBotao = `${estilos.botaoPrincipal} ${obterClasseDeTamanho()}`.trim();

  return (
    <button
      className={classesDoBotao}
      disabled={estaCarregando || propriedadesNativas.disabled}
      {...propriedadesNativas}
    >
      {estaCarregando ? 'Carregando...' : texto}
    </button>
  );
}
