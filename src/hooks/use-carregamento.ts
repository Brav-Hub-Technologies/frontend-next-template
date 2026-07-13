/* src/hooks/use-carregamento.ts */
import { useState } from 'react';

/**
 * Hook customizado utilitário para isolar o controle de estados de processamento de telas.
 */
export function useCarregamento(estadoInicial: boolean = false) {
  const [estaCarregando, definirEstaCarregando] = useState<boolean>(estadoInicial);

  const iniciarCarregamento = () => definirEstaCarregando(true);
  const finalizarCarregamento = () => definirEstaCarregando(false);

  return {
    estaCarregando,
    iniciarCarregamento,
    finalizarCarregamento,
  };
}