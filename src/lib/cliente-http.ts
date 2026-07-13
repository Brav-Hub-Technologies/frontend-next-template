/* src/lib/cliente-http.ts */
import axios from 'axios';

// Instância limpa do Axios configurada para a API backend do ecossistema
export const clienteHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_DA_API || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador de requisição seguro para injeção de tokens de autenticação
clienteHttp.interceptors.request.use((configuracao) => {
  const tokenDeAcesso = typeof window !== 'undefined' ? localStorage.getItem('token_autenticacao') : null;
  
  if (tokenDeAcesso && configuracao.headers) {
    configuracao.headers.Authorization = `Bearer ${tokenDeAcesso}`;
  }
  
  return configuracao;
});