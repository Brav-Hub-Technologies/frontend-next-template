/* src/utils/formatadores.ts */
/**
 * Formata um valor numérico para o padrão de moeda do Brasil (BRL).
 * @param valor O número a ser formatado.
 * @returns A string formatada em formato de moeda real.
 */
export function formatarMoedaParaReal(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}