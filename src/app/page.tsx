/* src/app/page.tsx */
'use client';


import { ROTAS_SISTEMA } from '@/constants/rotas';
import { formatarMoedaParaReal } from '@/utils/formatadores';

import { SecaoHero } from '@/components/secoes/SecaoHero/SecaoHero';

export default function PaginaInicial() {
  const manipularCliqueNoBotao = () => {
    console.log('Navegando para a rota:', ROTAS_SISTEMA.LOGIN);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <SecaoHero 
        titulo="Bem-vindo ao Template Frontend"
        subtitulo="Este é o ponto de partida padrão para os nossos sistemas visuais, já utilizando a arquitetura correta de UI e Secões."
        textoBotaoPrincipal="Acessar Sistema"
        aoClicarNoBotao={manipularCliqueNoBotao}
      />
      
      <p style={{ textAlign: 'center' }}>
        Temos os utilitários funcionando também: {formatarMoedaParaReal(1500.5)}
      </p>
    </main>
  );
}