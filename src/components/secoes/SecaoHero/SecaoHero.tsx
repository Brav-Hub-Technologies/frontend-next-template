import React from 'react';
import estilos from './SecaoHero.module.css';
import { Botao } from '@/components/ui/Botao/Botao';

interface SecaoHeroProps {
  titulo: string;
  subtitulo: string;
  textoBotaoPrincipal?: string;
  aoClicarNoBotao?: () => void;
}

export function SecaoHero({ 
  titulo, 
  subtitulo, 
  textoBotaoPrincipal = 'Começar agora',
  aoClicarNoBotao 
}: SecaoHeroProps) {
  return (
    <section className={estilos.hero}>
      <h1 className={estilos.titulo}>{titulo}</h1>
      <p className={estilos.subtitulo}>{subtitulo}</p>
      
      <div className={estilos.acoes}>
        <Botao 
          texto={textoBotaoPrincipal} 
          tamanho="grande" 
          onClick={aoClicarNoBotao}
        />
      </div>
    </section>
  );
}
