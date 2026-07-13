/* src/services/usuario-servico.ts */
import { clienteHttp } from '@/lib/cliente-http';
import { TipoUsuarioLogado } from '@/types/usuario';

/**
 * Requisita os dados de cadastro e perfil do usuário logado no momento.
 * @returns Uma promessa que resolve na estrutura de dados do usuário logado.
 */
export async function buscarPerfilDoUsuario(): Promise<TipoUsuarioLogado> {
  const resposta = await clienteHttp.get<TipoUsuarioLogado>('/usuarios/perfil/');
  return resposta.data;
}